import "./NavbarComp.css";
import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min';

function Navbar() {

    document.addEventListener('DOMContentLoaded', function () {
        let elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }, { passive: true });

    return (
        <div className="navbar">
            <nav>
                <div className="nav-wrapper darkblue">
                    <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>

                    <Link to='/' className="brand-logo center">robsoza</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/form'>Book A Trip</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <li className="sidenav-close"><a><i className="material-icons sidenav-close">arrow_back</i></a></li>
                <li><Link to='/' className="waves-effect sidenav-close">Home</Link></li>
                <li><Link to='/form' className="waves-effect sidenav-close">Book A Trip</Link></li>
                <li><Link to='/about' className="waves-effect sidenav-close">About</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;