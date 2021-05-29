import React, {Component} from 'react';

class HireMe extends Component {
    render() {
        return (
            <div>
                <div className="page hire-me-page" style={{paddingTop: '5rem'}}>
                    <section className="portfolio-block hire-me">
                        <div className="container">
                            <div className="heading">
                                <h2>Hire Me</h2>
                            </div>
                            <form>
                                <div className="mb-3"><label className="form-label" htmlFor="name">Your name</label><input className="form-control" type="name" id="name" /></div>
                                <div className="mb-3"><label className="form-label" htmlFor="subject">Subject</label><input className="form-control" type="subject" id="subject" /></div>
                                <div className="mb-3"><label className="form-label" htmlFor="email">Email</label><input className="form-control" type="email" id="email" /></div>
                                <div className="mb-3"><label className="form-label" htmlFor="message">Message</label><textarea className="form-control" id="message" defaultValue={""} /></div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6"><label className="form-label" htmlFor="hire-date">Date</label><input className="form-control" id="hire-date" type="date" /></div>
                                        <div className="col-md-6 button"><button className="btn btn-primary d-block w-100" type="submit">Hire Me</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default HireMe;
