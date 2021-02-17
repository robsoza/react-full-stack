import React from 'react';
import "./AboutComp.css";
import Banf from '../image/sample-1.jpg'

function AboutComp() {
    return (

        <div className="row center aboutcomp">
            <div className="row center-align">
                <div className="col s12 l7">
                    <div className="card">

                        <div className="card-image" >
                            <img src={Banf} alt="Trip" width="300" height="525" />
                            <span className="card-title">CANADA</span>
                        </div>

                        <div className="card-content">
                            <p>Vacation Packages in popular destinations!</p>
                            <p>Find your perfect vacation package</p>
                        </div>

                        <div className="card-action">
                            <a href="https://www.linkedin.com/in/robsoza/">Find out more</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default AboutComp;