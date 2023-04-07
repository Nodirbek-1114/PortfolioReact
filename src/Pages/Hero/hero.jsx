import React from 'react';
import hero from "../../assets/images/hero-img.png";
import './index.scss'
const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero__left">
                        <h1 className="hero__left--title">Hi, I am John,
                            Creative Technologist
                        </h1>
                        <p className="hero__left--text">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <button className="hero__left--btn">Download Resume</button>
                    </div>
                    <div className="hero__right">
                        <img src={hero} alt="persoin image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;