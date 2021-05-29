import React, {Component} from 'react';
import Avatar from '../assets/img/avatar/avatar.png'
import {Link} from "react-router-dom";

class CV extends Component {
    render() {
        return (
            <div>
                <div className="page cv-page">
                    <section className="portfolio-block block-intro border-bottom" style={{paddingTop: '10rem'}}>
                        <div className="container">
                            <div className="avatar" style={{backgroundImage: `url(${Avatar})`}} />
                            <div className="about-me">
                                <p>Hello! I am Pham Minh Duy.&nbsp;I am studying Computer Science at Vietnam National University</p><Link className="btn btn-outline-primary" role="button" to="/hire">Hire me</Link>
                            </div>
                        </div>
                    </section>
                    <section className="portfolio-block cv">
                        <div className="container">
                            <div className="education group">
                                <div className="heading">
                                    <h2 className="text-center">Education</h2>
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3>High School</h3>
                                            <h4 className="organization bg-primary">Lien Ha High School</h4>
                                        </div>
                                        <div className="col-6"><span className="period">9/2016 - 05/2019</span></div>
                                    </div>
                                    <p className="text-muted" />
                                </div>
                                <div className="item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h3>Studying Computer Science</h3>
                                            <h4 className="organization bg-primary">Vietnam National University</h4>
                                        </div>
                                        <div className="col-md-6"><span className="period">09/2019- now</span></div>
                                    </div>
                                    <p className="text-muted" />
                                </div>
                            </div>
                            <div className="group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="skills portfolio-info-card">
                                            <h2>Skills</h2>
                                            <h3>Coding skills in C++, Java, JavaScript</h3>
                                            <h3><strong>Basic software development skills based on Java</strong>&nbsp;(Java Swing, JavaFX)<strong>&nbsp;and C++ (SDL)</strong></h3>
                                            <h3><strong>Basic web development skills using ReactJS, ExpressJS</strong></h3>
                                            <h3><strong>Basic photo and video editing skills</strong></h3>
                                            <h3>Basic Microsoft Office skills</h3>
                                            <h3>Basic Github skills</h3>
                                            <h3><strong>Intermediate English level</strong></h3>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-info portfolio-info-card">
                                            <h2>Contact Info</h2>
                                            <div className="row">
                                                <div className="col-1"><i className="icon ion-android-calendar icon" /></div>
                                                <div className="col-9"><span>03/12/2001</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-1"><i className="icon ion-person icon" /></div>
                                                <div className="col-9"><span>Pham Minh Duy</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-1"><i className="icon ion-ios-telephone icon" /></div>
                                                <div className="col-9"><span>+84 981 502 088&nbsp;</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-1"><i className="icon ion-at icon" /></div>
                                                <div className="col-9"><span>M.Duy2001@gmail.com</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-1"><i className="icon ion-at icon" /></div>
                                                <div className="col-9"><span>19021252@vnu.edu.vn</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hobbies group">
                                <div className="heading">
                                    <h2 className="text-center">Hobbies</h2>
                                </div>
                                <p className="text-center text-muted" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default CV;
