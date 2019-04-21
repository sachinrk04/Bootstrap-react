import React, { Component } from 'react';

import banner from '../../images/ban1.jpg'
import banner2 from '../../images/ban2.jpg'
import banner3 from '../../images/ban3.jpg'

class UpcomingEvent extends Component {
    render() {
        return (
            <React.Fragment>
                <section className=" text-center">
                    <div className="container">
                        <h1 className="heading">Upcoming Events</h1>
                        <p className="lead text-muted">text goes here, text goes heretext goes heretext goes heretext goes here</p>
                    </div>
                </section>
        <div className="album py-5 ">
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 border-0">
                <img className="rounded" src={banner3} alt="banner" />
                <div className="">
                <small className="text-muted">Date | PROGRAMS</small>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-link text-decoration-none">+ READ MORE</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 border-0">
                <img src={banner2} alt="banner" />
                <div className="">
                <small className="text-muted">Date | PROGRAMS</small>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-link text-decoration-none">+ READ MORE</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 border-0">
                <img src={banner3} alt="banner" />
                <div className="">
                <small className="text-muted">Date | PROGRAMS</small>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-link text-decoration-none">+ READ MORE</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 border-0">
                <img src={banner3} alt="banner" />
                <div className="">
                <small className="text-muted">Date | PROGRAMS</small>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-link text-decoration-none">+ READ MORE</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 border-0">
                <img src={banner3} alt="banner" />
                <div className="">
                <small className="text-muted">Date | PROGRAMS</small>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-link text-decoration-none">+ READ MORE</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 border-0">
                <img src={banner} alt="banner" />
                <div className="">
                <small className="text-muted">Date | PROGRAMS</small>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-link text-decoration-none">+ READ MORE</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </React.Fragment>
        );
    }
}

export default UpcomingEvent;