import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
                    <div className="container"><a className="navbar-brand logo" href="#">About me</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="/#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="/#">Projects</a></li>
                                <li className="nav-item"><a className="nav-link active" href="/#">CV</a></li>
                                <li className="nav-item"><a className="nav-link" href="/#">Hire me</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
