import React, { Component } from "react";
import Contact from "./Contact";
export default class ListContacts extends Component {
  render() {
    console.log("Props", this.props);
    return <ol className="contact-list">
        {this.props.contacts.map(c => <Contact key={c.id} contact={c}/>)}
    </ol>
  }
}
