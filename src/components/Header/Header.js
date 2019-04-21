import React, { Component } from 'react';
import './Header.css';
import banner1 from '../../images/abttwo.png';
import eventsix from '../../images/eventsix.jpg';
import cardone from '../../images/cardone.jpg';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Header-Bg mb-5">
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
                        <h1 className="my-0 mx-auto font-weight-bold text-white">LOGO</h1>
                        <nav className="my-2 my-md-0 mr-md-5">
                            <a className="p-2 text-white mx-4 font-weight-bold" href="/">Sports</a>
                            <a className="p-2 text-white mx-4 font-weight-bold" href="/">Academics</a>
                            <a className="p-2 text-white mx-4 font-weight-bold" href="/">Support</a>
                            <a className="p-2 text-white mx-4 font-weight-bold" href="/">Activites</a>
                            <a className="p-2 text-white mx-4 font-weight-bold" href="/">Tutoring</a>
                            <a className="p-2 text-white mx-4 font-weight-bold" href="/">Centers</a>
                            <a className="p-2 text-white mx-4 font-weight-bold" href="/">Summer Programs</a>
                            <a className="p-2 text-white mx-4 font-weight-bold" href="/">Blogs</a>
                        </nav>
                        <a className="btn mx-auto btn-outline-light text-white px-5" href="/">Sign up</a>
                    </div>

                    <section className="p-0 position-relative landing-banner text-white">
                        <div className="container h-100">
                            <div className="row d-flex align-items-center justify-content-center banner-content h-100">
                                <div className="col-12 col-sm-8 col-lg-6 mt-2 mt-md-0 pr-0 pr-sm-5 pr-lg-5 ">
                                    <h1 className="display-sm-6 display-md-3 display-xl-3 font-weight-bolder">Stay Up To Date On Our Upcoming Events</h1> 
                                    <h6 className="my-5 lead font-weight-normal">Ultimate all-around theme specially designed for the agency, marketing firms, portfolio, creative, startup, landing page and corporate.</h6>
                                    <a className="btn btn-outline-light px-4 mr-4 mb-5 mb-0" href="/" target="_blank">LEARN MORE</a>
                                </div>
                            </div>
                           <div className="row">
                           <div className="col-ms-4 col-lg-4 banner-mockup p-0">
                                <img src={eventsix} className="img-fluid w-100" alt="hdfh"/>
                            </div>
                           <div className="col-ms-4 col-lg-4 banner-mockup p-0">
                                <img src={banner1} className="img-fluid w-100" alt="hdfh"/>
                            </div>
                           <div className="col-ms-4 col-lg-4 banner-mockup p-0">
                                <img src={cardone} className="img-fluid w-100" alt="hdfh"/>
                            </div>
                           </div> 
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;