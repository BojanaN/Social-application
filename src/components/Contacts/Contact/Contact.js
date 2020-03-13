import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
    }

    callbackFunction(contact) {
        this.props.callbackFunction(contact);
    }

    render() {
        return (
            <div className="contact-card">
                <div className="contact-image">
                    <img className="img-fluid" src={this.props.image} alt="profile-img" />
                </div>
                <div className="contact-name">
                    <h6>{this.props.contact.fullname}</h6>
                </div>
                <div className="contact-button">
                    <button className="btn btn-outline-secondary" onClick={() => this.callbackFunction(this.props.contact)}>→</button>
                </div>
            </div>
        )
    }
}

export default Contact;