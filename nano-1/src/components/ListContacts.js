import React from "react";
import Contact from "./Contact";
import PropTypes from 'prop-types'

function ListContacts({ contacts, removeContact }) {
  return <ol className="contact-list">
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </ol>;
}

ListContacts.propTypes = {
  contacts : PropTypes.array.isRequired,
  removeContact : PropTypes.func.isRequired
}
export default ListContacts;
