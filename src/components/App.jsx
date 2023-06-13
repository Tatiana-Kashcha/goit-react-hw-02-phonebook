import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

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

    const { contacts } = this.state;

    const isDuplicateUser = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicateUser) {
      alert('This name is already in the contacts list.');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  deleteUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleCangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  searchUser = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const searchUser = this.searchUser();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleCangeFilter={this.handleCangeFilter} />
        <ContactList data={searchUser} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
