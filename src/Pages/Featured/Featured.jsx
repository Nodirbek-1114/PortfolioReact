import React from 'react';
import './index.scss'
import designing from '../../assets/images/designing.png'
import vibrant from '../../assets/images/vibrant.png'
import days from '../../assets/images/days.png'

const Featured = () => {
    return (
        <section>
            <div className="featured-wrapper">
                <div className="container">
                    <div className="featured">
                        <h5 className="featured__title">Featured works</h5>
                        <div className="featured__wrapper">
                            <div className="featured__card">
                                <div className="featured__card--left">
                                    <img src={designing} alt="designing image" className="featrued__card--left-img" />
                                </div>
                                <div className="featured__card--right">
                                    <div className="featured__card--right-title">Designing Dashboards</div>
                                    <div className="fearured__card--right-info"><span className="fearured__card--right-date">2020</span> <span className="featured__card--right-dashboard">Dashboard</span></div>
                                    <div className="featured__card--right-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </div>
                            </div>
                            <div className="featured__card">
                                <div className="featured__card--left">
                                    <img src={vibrant} alt="designing image" className="featrued__card--left-img" />
                                </div>
                                <div className="featured__card--right">
                                    <div className="featured__card--right-title">Vibrant Portraits of 2020</div>
                                    <div className="fearured__card--right-info"><span className="fearured__card--right-date">2018</span> <span className="featured__card--right-dashboard">Dashboard</span></div>
                                    <div className="featured__card--right-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </div>
                            </div>
                            <div className="featured__card">
                                <div className="featured__card--left">
                                    <img src={days} alt="designing image" className="featrued__card--left-img" />
                                </div>
                                <div className="featured__card--right">
                                    <div className="featured__card--right-title">36 Days of Malayalam type</div>
                                    <div className="fearured__card--right-info"><span className="fearured__card--right-date">2018</span> <span className="featured__card--right-dashboard">Typography</span></div>
                                    <div className="featured__card--right-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;