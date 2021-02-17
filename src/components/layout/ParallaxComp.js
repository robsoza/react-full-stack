import React, { useEffect } from 'react';
import Background from '../../image/beach.jpg'
import "./ParallaxComp.css"

function ParallaxComp() {

    useEffect(() => {
        var elems = document.querySelectorAll('.parallax');
        window.M.Parallax.init(elems, {});
    }, []);


    return (
        <div className="parallax-container parallax-font">
            <div className="parallax">
                <img src={Background} alt="parallax_1" />
            </div>
            <div>
                <h1>Helping Canadians Book</h1>
                <h1>Great Vacations Online</h1>
                <p>Made in Canada</p>
            </div>
        </div>
    )
}
export default ParallaxComp;