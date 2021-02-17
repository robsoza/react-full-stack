import './PersonFormComp.css';
import React, { useContext } from 'react';
import { AppContext } from '../context/ContextProvider';
import { useHistory } from 'react-router-dom';

function PersonFormComp() {

    const { person, iSave, iDelete, userMsg, message } = useContext(AppContext);
    const history = useHistory();

    function focusElement(name) {
        const el = document.querySelector(`[name=${name}]`);
        el.focus();
        el.select();
    }

    function onUpdate(e) {

        // Get all the input values into a person object to save
        const persona = {};
        persona.key = person ? person.key : '';
        const idpersonform = document.getElementById('idpersonform');
        const inputs = idpersonform.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++) {
            persona[inputs[i].name] = inputs[i].value;
        }

        // Do some simple validation
        try {
            if (!persona.fname) {
                focusElement('fname');
                throw new Error('First name can not be blank');
            }
            if (!persona.lname) {
                focusElement('lname');
                throw new Error('Last name can not be blank');
            }

            e.target.textContent == 'Save' ? iSave(persona) : iDelete(persona);
            history.push('/');

        } catch (e) {
            userMsg(e.message, 'error');
        }

        e.preventDefault();
    }

    function onCancel(e) {
        e.preventDefault();
        history.push('/');
        userMsg('Server on!', 'success');
    }

    return (
        <div className='row'>
            <form id='idpersonform' onSubmit={e => e.preventDefault()}>
                <h3>Vacation Form</h3>
                <div className='form-group'>
                    <label>First Name</label>
                    <input name='fname'
                        defaultValue={person ? person.fname : ''}
                        className='input-control'
                        placeholder='name' />
                    <span />
                    <label>Last Name</label>
                    <input name='lname'
                        defaultValue={person ? person.lname : ''}
                        className='input-control'
                        placeholder='last' />
                </div>

                <div className='form-group'>
                    <label>Company</label>
                    <input name='company'
                        defaultValue={person ? person.company : ''}
                        className='input-control'
                        placeholder='company' />
                </div>

                <div className='form-group'>
                    <label>City, Prov, Post</label>
                    <input name='city'
                        defaultValue={person ? person.city : ''}
                        className='input-control'
                        style={{ flex: '4' }}
                        placeholder='city' />
                    <input name='prov'
                        defaultValue={person ? person.prov : ''}
                        className='input-control'
                        style={{ flex: '3' }}
                        placeholder='prov' />
                    <input name='post'
                        defaultValue={person ? person.post : ''}
                        className='input-control'
                        style={{ flex: '3' }}
                        placeholder='post' />
                </div>

                <div className='form-group'>
                    <label>&nbsp;</label>
                    <button className='waves-effect teal waves-light btn'
                        onClick={onUpdate}>Save</button>
                    <button className='waves-effect red waves-light btn'
                        onClick={onUpdate}>Delete</button>
                    <button className='waves-effect grey waves-light btn'
                        onClick={onCancel}>Cancel</button>
                </div>
            </form>
            <div className={message.class}>{message.text}</div>
        </div>
    )
}

export default PersonFormComp;