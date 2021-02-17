import { url, postData, getData } from './postData';

class People {

    constructor() {
        this.people = {};
        this.lastKey = 0;
    }

    length() {
        return Object.keys(this.people).length;
    }

    get(key) {
        return this.people[key];
    }

    getNewPerson() {
        return new Person({});
    }

    async getPeople() {

        const data = await getData(url);
        //const data = await postData(url + 'all');

        const people = {};
        data.forEach(x => {
            people[x.key] = x;
            this.lastKey = (x.key > this.lastKey) ? x.key : this.lastKey;
        });

        this.people = people;

    }

    async addOrUpdate(person) {

        let theUrl;

        if (person.key) {
            theUrl = url;
            //theUrl = url + 'update';
        } else {
            theUrl = url;
            //theUrl = url + 'add';
            this.lastKey++;
            person.key = this.lastKey;
        }

        await postData(theUrl, person, 'POST');
        //await postData(theUrl, person);
        this.people[person.key] = person;
    }

    async delete(person) {
        let theUrl = url + 'delete';
        const response = await postData(theUrl, person, 'DELETE');
        //const response = await postData(theUrl, person);
        this.people[person.key] = person;
        return response;
    }
}

class Person {

    static lastKey = 0;
    constructor(obj) {
        const defaults = { fname: '', lname: '', company: '', city: '', prov: '', post: '', key: '' }
        const data = { ...defaults, ...obj };
        this.fname = data.fname;
        this.lname = data.lname;
        this.company = data.company;
        this.city = data.city;
        this.prov = data.prov;
        this.post = data.post;
        this.key = data.key;
    }

    newKey() {
        Person.lastKey++;
        this.key = Person.lastKey;
    }
}

export default { Person, People };