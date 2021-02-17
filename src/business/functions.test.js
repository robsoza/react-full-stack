
//global.fetch = require('node-fetch');
import funcs from "./functions";
import { url } from "./postData";


test('test getNewPerson', () => {
    const peopleCtrl = new funcs.People();
    const p1 = peopleCtrl.getNewPerson();

    expect(p1.fname).toBe('');
    expect(p1.lname).toBe('');
    expect(p1.company).toBe('');
});

test('test load People from api', async () => {

    const peopleCtrl = new funcs.People();

    try {
        const url = funcs.url;
        const postData = funcs.postData;

        // clear the server (delete all the data on the server)
        await postData(url + 'clear', "POST");

        let person;
        await peopleCtrl.getPeople();

        expect(peopleCtrl.length()).toBe(0);

        person = peopleCtrl.getNewPerson();
        person.fname = "Mike";
        await peopleCtrl.addOrUpdate(person);

        await peopleCtrl.getPeople();
        expect(peopleCtrl.length()).toBe(1);

        person = peopleCtrl.getNewPerson();
        person.fname = "Sam";
        await peopleCtrl.addOrUpdate(person);

        await peopleCtrl.getPeople();
        expect(peopleCtrl.length()).toBe(2);

        person = peopleCtrl.get('1');
        expect(person.fname).toBe('Mike');
        person = peopleCtrl.get('2');
        expect(person.fname).toBe('Sam');

        person = peopleCtrl.get('1');
        person.fname = "Bob";
        person.lname = "Smith";
        await peopleCtrl.addOrUpdate(person);

        await peopleCtrl.getPeople();
        person = peopleCtrl.get('1');
        expect(person.fname).toBe('Bob');
        person = peopleCtrl.get('2');
        expect(person.fname).toBe('Sam');

        // Test the last key works
        expect(peopleCtrl.lastKey).toBe(2);
        const peopleCtrl2 = new funcs.People();
        await peopleCtrl2.getPeople();
        expect(peopleCtrl2.lastKey).toBe(2);
        

    } catch (e) {
        console.log("*** Start the server dummy ***");
        console.log(e);
        //expect("").toBe(e.message);
    }
});

/*
    This tests an interesting problem found in user testing.
    When an instance of a Person Class is copied into a simple object
    the Person methods are not copied only the properties are copied.
*/
test('test load person instance from person copy', async () => {
    
    const peopleCtrl = new funcs.People();
    console.log(peopleCtrl, url)
    // clear the server (delete all the data on the server)
    await funcs.postData(url + 'clear');

    let person;
    person = peopleCtrl.getNewPerson();
    person.fname = "Mike";
    // console.log(person);
    const newPerson = { ...person };
    // console.log(newPerson);

    await peopleCtrl.addOrUpdate(newPerson);
});
/*
    Make sure addOrUpdate updates the internal storage
*/
test('test addOrUpdate updates internal storage', async () => {

    // clear the server (delete all the data on the server)
    await funcs.postData(url + 'clear');
    funcs.Person.lastKey = 0;
    const peopleCtrl = new funcs.People();

    let p1, p2;
    p1 = peopleCtrl.getNewPerson();
    p1.fname = "Mike";
    p1.lname = "S";
    p1.company = "comp";
    p1.city = "cal";
    p1.prov = "ab";
    p1.post = "post";
    await peopleCtrl.addOrUpdate(p1);

    //console.log(peopleCtrl.people);

    p2 = peopleCtrl.get('1');
    expect(p2.fname).toBe('Mike');

    p2.fname = "Bob";
    p2.lname = "S";
    p2.company = "comp";
    p2.city = "cal";
    p2.prov = "ab";
    p2.post = "post";
    await peopleCtrl.addOrUpdate(p2);
    p1 = peopleCtrl.get('1');
    expect(p1.fname).toBe('Bob');
    console.log(p1)
});