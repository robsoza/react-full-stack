import './PeopleListComp.css';
import React, { useContext } from 'react';
import { AppContext } from '../context/ContextProvider';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function PeopleListComp({ people }) {

    PeopleListComp.propTypes = {
        people: PropTypes.array
    }

    const { iAdd, ipeople, iUpdate, message } = useContext(AppContext);
    const history = useHistory();

    people = ipeople ? ipeople : people;
    
    let listOfStuff;
    if (people) {
        listOfStuff = Object.keys(people).map(k => {
            const p = people[k];
            return (
                <li
                    key={p.key}
                    mykey={p.key}
                    className="collection-item center-align" >
                    {p.fname}
                </li>
            )
        });
    }

    function onUpdate(e) {
        iUpdate(e.target.getAttribute("mykey"));
        history.push('/form');
    }

    function onAdd() {
        iAdd();
        history.push('/form');
    }

    return (
        <div className="peoplelist">
            <div
                className={message.class}>
                {message.text}
            </div>
            <h4> Book Your Trip Now! </h4>
            <button
                className="waves-effect signupbtn"
                onClick={onAdd}>
                Sign Up
            </button>
            <ol
                className="collection clList"
                onClick={onUpdate}>
                {listOfStuff}
            </ol>
        </div>
    );
}

export default PeopleListComp;