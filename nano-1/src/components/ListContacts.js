import React, { Component } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

class ListContacts extends React.Component {
  // To add propTypes to a class we can use this method
  // The older method defining propTypes is generally used
  // for functional components receiving the props
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired
  };
  state = {
    query: ""
  };
  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
    
  };
  render() {
    const { contacts, removeContact } = this.props;
    return (
      <div className="list-contacts">
        {/* {JSON.stringify(this.state.query)} */}
        <div className="list-contacts-top">
          <input
            type="text"
            className="search-contacts"
            placeholder="Search Contact"
            value={this.state.query}
            onChange={e => this.updateQuery(e.target.value)}
          />
        </div>
        <ol className="contact-list">
          {contacts.map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              removeContact={removeContact}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
