import React, { Component } from "react";
import ListContacts from "./components/ListContacts";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: "karen",
          name: "Karen Isgrigg",
          handle: "karen_isgrigg",
          avatarURL: "http://localhost:5001/karen.jpg"
        },
        {
          id: "richard",
          name: "Richard Kalehoff",
          handle: "richardkalehoff",
          avatarURL: "http://localhost:5001/richard.jpg"
        },
        {
          id: "tyler",
          name: "Tyler McGinnis",
          handle: "tylermcginnis",
          avatarURL: "http://localhost:5001/tyler.jpg"
        }
      ]
    };
  }
  removeContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(c => c.id !== contact.id)
    }));
  };

  render() {
    const { contacts } = this.state;
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

        <ListContacts contacts={contacts} removeContact={this.removeContact} />
        {/* It is really easy to reduce those elements.Here ContactList 
        is composed of Contacts.So we can say that ContactList is the parent
        component and it will hold a bunch of Contact Components */}
        {/* Props allow you to pass data into your components */}
        {/* Functional Components-An alternative and probably more intuitive approach for 
        creating the components */}
        {/* Controlled Components allow you to hook up the forms in
        your application to your component state */}
        {/* React gives you a helper method to update the state 
        1st way is to pass a function to the setState 
         i.e this.setState(() => {
           count : 1
           //For anything else you can use this setState version
         })
         Use the below one when your new state of the component depends on the old state of the component
         this.setState(prevState => {
            count : prevState.count + 1
         });
        Always prefer to use the functional setState method to update the state for the component 
         Whatever way you use the setState the end result will always be the same 
         In react, UI is just a function of the state.If the state changes the UI will also change as a result 
         Once your state changes the UI will automatically update accordingly
         */}
      </div>
    );
  }
}

export default App;
