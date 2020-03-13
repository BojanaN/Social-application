import React, { Component } from 'react';
import Contact from '../Contact/Contact';

class ContactList extends Component {
    constructor(props) {
        super(props);
    }

    callbackFunction = (contact) => {
        this.props.callbackFunction(contact);
    }

    render() {

        let contacts = this.props.filteredContacts.map((contact, index) => {
            return <Contact key={index} contact={contact} image={contact.image} callbackFunction={this.callbackFunction} />
        })
        return (
            <div>
                {contacts}
            </div>
        )
    }
}

export default ContactList;