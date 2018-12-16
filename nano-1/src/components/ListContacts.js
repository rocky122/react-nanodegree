import React, { Component } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

class ListContacts extends Component {
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
  clearQuery = () => this.updateQuery("");
  render() {
    const { query } = this.state;
    const { contacts, removeContact } = this.props;

    const showingContacts =
      query === ""
        ? contacts
        : contacts.filter(c =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        {/* {JSON.stringify(this.state.query)} */}
        <div className="list-contacts-top">
          <input
            type="text"
            className="search-contacts"
            placeholder="Search Contact"
            value={query}
            onChange={e => this.updateQuery(e.target.value)}
          />
        </div>

        {showingContacts.length !== contacts.length ? (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} contacts of {contacts.length}
            </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        ) : null}

        <ol className="contact-list">
          {showingContacts.map(contact => (
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
