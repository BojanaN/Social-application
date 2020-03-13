import React, { Component } from 'react';
import './ContactDetails.css';

class ContactDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const contact = this.props.contact;

        return (
            <div className="cd-details">
                <div className="row">
                    <h1>{contact.fullname}</h1>
                </div>
                <div className="row">
                    <div className="cd-image">
                        <img src={contact.image}></img>
                    </div>
                    <div className="cd-info">
                        <div className="row-item">
                            <div className="cd-info-item">
                                <div className="cd-info-item-label">
                                    <p>Age</p>
                                </div>
                                <div className="cd-info-item-value">
                                    <p>{contact.age}</p>
                                </div>
                            </div>
                            <div className="cd-info-item">
                                <div className="cd-info-item-label">
                                    <p>Sex</p>
                                </div>
                                <div className="cd-info-item-value">
                                    <p>{contact.sex}</p>
                                </div>
                            </div>
                            <div className="cd-info-item">
                                <div className="cd-info-item-label">
                                    <p>Email</p>
                                </div>
                                <div className="cd-info-item-value">
                                    <p>{contact.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row-item">
                            <div className="cd-info-item">
                                <div className="cd-info-item-label">
                                    <p>Phone</p>
                                </div>
                                <div className="cd-info-item-value">
                                    <p>{contact.phone}</p>
                                </div>
                            </div>
                            <div className="cd-info-item">
                                <div className="cd-info-item-label">
                                    <p>Address</p>
                                </div>
                                <div className="cd-info-item-value">
                                    <p>{contact.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactDetails;