import React, { Component } from 'react';
import ListContacts from './components/ListContacts';

class App extends Component {
  render() {
    const contacts = [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ];
    return (
      <div className="App">
        {/***
          Here we are using the concept of composition 
          and that means the App Component is composed of
          ContactList so invoke the ContactList.Dont 
          think it as a component it is a component definitely 
          but it is invoked as a function the difference is that
          it does not return a value but some markup.
         */}

        <ListContacts contacts={contacts}/>
        {/* It is really easy to reduce those elements.Here ContactList 
        is composed of Contacts.So we can say that ContactList is the parent
        component and it will hold a bunch of Contact Components */}
        {/* Props allow you to pass data into your components */}
        {/* Functional Components-An alternative and probably more intuitive approach for 
        creating the components */}
        {/* Controlled Components allow you to hook up the forms in
        your application to your component state */}
      </div>
    );
  }
}

export default App;
