import React from "react";
import PropTypes from "prop-types";

const Contact = ({ contact, removeContact }) => {
  console.log("Props", contact);
  return (
    <li className="contact-list-item">
      <div
        className="contact-avatar"
        style={{
          backgroundImage: `url(${contact.avatarURL})`
        }}
      />
      <div className="contact-details">
        <p>{contact.name}</p>
        <p>{contact.handle}</p>
      </div>
      <button className="contact-remove" onClick={() => removeContact(contact)}>
        Remove
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  removeContact: PropTypes.func.isRequired
};

export default Contact;

