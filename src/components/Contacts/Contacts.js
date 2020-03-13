import React, { Component } from 'react';
import './Contacts.css';
import '../SearchBox/SearchBox';
import ContactList from '../Contacts/ContactList/ContactList';
import ContactDetails from '../Contacts/ContactDetails/ContactDetails';
import SearchBox from '../SearchBox/SearchBox';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                { fullname: "John Doe", image: require("../../data/contact-image/1.jpg"), age: 30, sex: "Male", email: "johndoe@hotmail.com", phone: "202-555-0148", address: "354 Rockwell St. Montgomery, AL 36109" },
                { fullname: "Alexandra Brooke", image: require("../../data/contact-image/2.jpg"), age: 24, sex: "Female", email: "alex.br@gmail.com", phone: "202-555-0143", address: "460 Thorne St. La Vergne, TN 37086" },
                { fullname: "Caroline Johnes", image: require("../../data/contact-image/3.jpg"), age: 29, sex: "Female", email: "johnes.caroline@gmail.com", phone: "202-555-0138", address: "8862 Second St. Wasilla, AK 99654" },
                { fullname: "Ian Brown", image: require("../../data/contact-image/4.jpg"), age: 26, sex: "Male", email: "i_brown94@yahoo.com", phone: "202-555-0134", address: "9907 N. Walnutwood St. Hallandale, FL 33009" },
                { fullname: "Bill Blake", image: require("../../data/contact-image/5.jpg"), age: 32, sex: "Male", email: "bill.blake@outlook.com", phone: "202-555-0168", address: "25 Longfellow Rd. Orlando, FL 32835" },
                { fullname: "John Doe", image: require("../../data/contact-image/1.jpg"), age: 30, sex: "Male", email: "johndoe@hotmail.com", phone: "202-555-0148", address: "354 Rockwell St. Montgomery, AL 36109" },
                { fullname: "Alexandra Brooke", image: require("../../data/contact-image/2.jpg"), age: 24, sex: "Female", email: "alex.br@gmail.com", phone: "202-555-0143", address: "460 Thorne St. La Vergne, TN 37086" },
                { fullname: "Caroline Johnes", image: require("../../data/contact-image/3.jpg"), age: 29, sex: "Female", email: "johnes.caroline@gmail.com", phone: "202-555-0138", address: "8862 Second St. Wasilla, AK 99654" },
                { fullname: "Ian Brown", image: require("../../data/contact-image/4.jpg"), age: 26, sex: "Male", email: "i_brown94@yahoo.com", phone: "202-555-0134", address: "9907 N. Walnutwood St. Hallandale, FL 33009" },
                { fullname: "Bill Blake", image: require("../../data/contact-image/5.jpg"), age: 32, sex: "Male", email: "bill.blake@outlook.com", phone: "202-555-0168", address: "25 Longfellow Rd. Orlando, FL 32835" },
                { fullname: "John Doe", image: require("../../data/contact-image/1.jpg"), age: 30, sex: "Male", email: "johndoe@hotmail.com", phone: "202-555-0148", address: "354 Rockwell St. Montgomery, AL 36109" },
                { fullname: "Alexandra Brooke", image: require("../../data/contact-image/2.jpg"), age: 24, sex: "Female", email: "alex.br@gmail.com", phone: "202-555-0143", address: "460 Thorne St. La Vergne, TN 37086" },
                { fullname: "Caroline Johnes", image: require("../../data/contact-image/3.jpg"), age: 29, sex: "Female", email: "johnes.caroline@gmail.com", phone: "202-555-0138", address: "8862 Second St. Wasilla, AK 99654" },
                { fullname: "Ian Brown", image: require("../../data/contact-image/4.jpg"), age: 26, sex: "Male", email: "i_brown94@yahoo.com", phone: "202-555-0134", address: "9907 N. Walnutwood St. Hallandale, FL 33009" },
                { fullname: "Bill Blake", image: require("../../data/contact-image/5.jpg"), age: 32, sex: "Male", email: "bill.blake@outlook.com", phone: "202-555-0168", address: "25 Longfellow Rd. Orlando, FL 32835" },
            ],
            searchContact: '',
            selectedContact: null
        }
    }

    handleSearch = (e) => {
        this.setState({ searchContact: e.target.value })
    }

    callbackFunction = (contact) => {
        this.setState({ selectedContact: contact });
    }

    render() {
        let filteredContacts = this.state.contacts.filter((contact) => {
            return (contact.fullname.toLowerCase().includes(this.state.searchContact.toLowerCase()))
        })

        return (
            <div>
                <div className="row">
                    <SearchBox handleSearch={this.handleSearch} />
                </div>
                <div className="row">
                    <div className="sidebar">
                        <ContactList filteredContacts={filteredContacts} callbackFunction={this.callbackFunction} />
                    </div>
                    <dv className="contact-details">
                        {this.state.selectedContact && <ContactDetails contact={this.state.selectedContact} />}
                    </dv>
                </div>
            </div>
        );
    }
}

export default Contact;