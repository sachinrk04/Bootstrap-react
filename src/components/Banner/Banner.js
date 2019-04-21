import React, { Component } from 'react';
import './Banner.css';

class componentName extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="BannerContainer w-auto">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center p-5">
                            <p className=" text-white display-4 mr-4">Call To Action Text Goes Here</p>
                            <p className="btn btn-outline-light text-white">START HERE</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default componentName;