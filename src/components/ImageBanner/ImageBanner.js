import React, { Component } from 'react';
import Peopleicon from '../../images/peopleicon.jpg';

class componentName extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="text-center my-5">
                    <div className="container">
                        <h2 className="heading">See What Other Parents Are Saying</h2>
                        <p className="lead text-muted mx-auto">
                            text goes here, text goes heretext goes heretext goes heretext goes here
                            text goes here, text goes heretext goes heretext goes heretext goes here
                            text goes here, text goes heretext goes heretext goes heretext goes here
                        </p>
                    </div>
                </section>
                <div className="mx-auto my-5">
                    <img src={Peopleicon} className="img-fluid w-100" alt="Respon"/>
                </div>
            </React.Fragment>
        );
    }
}

export default componentName;