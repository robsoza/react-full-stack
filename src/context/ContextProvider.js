import React, { useState, useEffect } from 'react';
import funcs from '../business/functions';
import PropTypes from 'prop-types';

export const AppContext = React.createContext();

export function ContextProvider(props) {

    ContextProvider.propTypes = {
        children: PropTypes.node,
    }

    const [peopleCtrl, setPeopleCtrl] = useState();
    const [iPeople, setIPeople] = useState();
    const [person, setPerson] = useState();
    const [message, setMessage] = useState({ text: 'Server on!', class: 'success' });

    useEffect(() => {
        try {
            const peeps = new funcs.People();
            setPeopleCtrl(peeps);
            peeps.getPeople();
        } catch (e) {
            userMsg('Turn the server on!', 'error');
        }
    }, []);

    async function iSave(person) {
        await peopleCtrl.addOrUpdate(person);
        userMsg('Saved', 'success');
    }

    function iAdd() {
        setPerson(peopleCtrl.getNewPerson());
        setIPeople(peopleCtrl.people);
        userMsg('Sign up now!', 'success');
    }

    function iUpdate(key) {
        setPerson(peopleCtrl.get(key));
        setIPeople(peopleCtrl.people);
        userMsg('Update info!', 'warning');
    }

    async function iDelete(person) {
        const response = await peopleCtrl.delete(person);
        setIPeople(peopleCtrl.people);
        response.status == 200 ?
            userMsg('Deleted', 'warning') :
            userMsg('Name was not found', 'warning');

    }

    function userMsg(msg, cls) {
        setMessage({ text: msg, class: cls });
        setTimeout(() => {
            setMessage({ text: 'Server on!', class: 'success' });
        }, 3500);
    }

    return (
        <AppContext.Provider
            value={{
                person, iPeople, iSave, iAdd, iUpdate,
                iDelete, message, userMsg
            }}>
            {props.children}
        </AppContext.Provider>
    )
}