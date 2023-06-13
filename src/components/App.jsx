import { Component } from 'react';
import { nanoid } from 'nanoid';
// import ContactForm from './ContactForm/ContactForm';
// import { ContactList } from '../components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addUser = data => {
    const newUser = {
      id: nanoid(),
      ...data,
    };

    console.log(newUser);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  deleteUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element => element.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList data={contacts} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
