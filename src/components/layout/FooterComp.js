import "./FooterComp.css";
import React from "react";
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className="footercomp">
            <footer className=" darkblue">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">robsoza</h5>

                            <a href="https://github.com/robsoza"><i className="material-icons social-icon">share</i></a>
                            <a href="https://www.linkedin.com/in/robsoza/"><i className="material-icons social-icon">verified_user</i></a>

                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Menu</h5>
                            <ul>
                                <li><Link to='/' className="waves-effect">Home</Link></li>
                                <li><Link to='/form' className="waves-effect">Book A Trip</Link></li>
                                <li><Link to='/about' className="waves-effect">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container white-text">
                        © 2021 Copyright robsoza
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;