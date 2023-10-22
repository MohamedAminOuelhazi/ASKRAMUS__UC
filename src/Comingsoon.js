import React from 'react';
import './ComingSoon.css'; // Créez ce fichier pour les styles
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Comingsoon = () => {
    return (

        <>
        <div className="design" >
            <div className="overlap-wrapper">
            <div className="overlap1">
            <div className="frame">
                <div className="div">
                    <div className="group">
                        <div className="text-wrapper"><Link className='a' to="/">ASKRAMUS UC</Link> </div>
                    </div>
                    <div className="frame-2">
                        <div className="text-wrapper-2">
                            <Link className='a' to="/About">About</Link>

                        </div>

                        <div className="text-wrapper-2"><Link className='a' to="/Gallery">Gallery</Link></div>

                        <button className="div-wrapper">
                            <a className="a" href="https://docs.google.com/forms/d/e/1FAIpQLSfLVR_UViFr1o8OBc1gqaHUQif0_tTqvNsWMRSNQgKLs58cHA/viewform?fbclid=IwAR0GzpRM0Fkknr6PrCAFx7msHFvyG1w8NUkgPQNuWJZM4ZALsNw9GDUP-zU&pli=1"><div className="text-wrapper-3">Contact</div></a>

                        </button>


                    </div>
                </div>
            </div>
            <div className="coming-soon-container">
                    <div className="logo">
                        {<img src='./as.png'></img>}
                    </div>
                    <h1>Coming Soon!</h1>
            </div>

        </div>
            </div>
        </div>


      
        </>
    );
};

export default Comingsoon;
