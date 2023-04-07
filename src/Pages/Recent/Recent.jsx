import React from 'react';
import './index.scss';

const Recent = () => {
    return (
        <section>
            <div className="recent-wrapper">
                <div className="container">
                    <div className="recent">
                        <div className="recent__top">
                            <h5 className="recent__top--title">Recent posts</h5>
                            <a href="#" className="recent__top--view">View all</a>
                        </div>
                        <div className="recent-card-wrapper">
                            <div className="recent__card">
                                <h3 className="recent__card--title">Making a design system from scratch</h3>
                                <div className="recent__card--info">
                                    <span className="recent__card--info-date">12 Feb 2020</span>
                                    <span className="recent__card--info-category">Design, Pattern</span>
                                </div>
                                <p className="recent__card--text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                            <div className="recent__card">
                                <h3 className="recent__card--title">Creating pixel perfect icons in Figma</h3>
                                <div className="recent__card--info">
                                    <span className="recent__card--info-date">12 Feb 2020</span>
                                    <span className="recent__card--info-category">Figma, Icon Design</span>
                                </div>
                                <p className="recent__card--text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recent;