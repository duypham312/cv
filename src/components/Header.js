import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
                    <div className="container"><Link className="navbar-brand logo" to="/">About me</Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><Link className="nav-link" to="/">CV</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/hire">Hire me</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
