import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5 bg-light">
                    <div className="container">
                        <footer className="pt-md-5">
                            <div className="row">
                            <div className="col-12 col-md">
                                <h1 className="text-danger font-weight-bold">LOGO</h1>
                            </div>
                            <div className="col-6 col-md">
                                <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="/">Sports</a></li>
                                <li><a className="text-muted" href="/">Acedemics</a></li>
                                <li><a className="text-muted" href="/">Dance</a></li>
                                <li><a className="text-muted" href="/">Music</a></li>
                                <li><a className="text-muted" href="/">Activities</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="/">Tutoring</a></li>
                                <li><a className="text-muted" href="/">Centers</a></li>
                                <li><a className="text-muted" href="/">Summer Programs</a></li>
                                <li><a className="text-muted" href="/">Blog</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="/">Home</a></li>
                                <li><a className="text-muted" href="/">Contact</a></li>
                                <li><a className="text-muted" href="/">Terms of Use</a></li>
                                <li><a className="text-muted" href="/">Privacy</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md">
                                <h3>Follow Us</h3>
                            </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;