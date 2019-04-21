import React, { Component } from 'react';
import our from '../../images/cardone.jpg';

class OurPartners extends Component {
    render() {
        return (
            <React.Fragment>
                <section className=" text-center">
                    <div className="container">
                        <h1 className="heading">Explore More Categories</h1>
                        <p className="lead text-muted">Since 2018, we,ve been delivering concreate results to our kids educational futures.</p>
                    </div>
                </section>
                <div className="container my-5 bg-light">
                    <div className="row">
                        <div className="col-md-7 col-lg-7 mx-auto">
                            <h4 className="mb-5">Our Partners</h4>
                            <p className="text-muted">Aww yeah, you successfully read this important alert message. 
                            This example text is going to run a bit longer so that you can see how spacing within
                            This example text is going to run a bit longer so that you can see how spacing within
                            This example text is going to run a bit longer so that you can see how spacing within
                            an alert works with this kind of content.</p>
                        </div>
                        <div className="col-md-5 col-lg-5 mx-auto">
                            <img src={our} class="img-fluid w-100" style={{height:"250px"}} alt="Responsiv"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OurPartners;