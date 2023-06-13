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

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  deleteUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element => element.id !== id),
    }));
  };

  searchUser = filter => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element =>
        element.name.includes(filter)
      ),
    }));
  };

  handleCangeFilter = e => {
    this.setState({ filter: e.target.value });
    this.searchUser();
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />

        <h2>Contacts</h2>
        <Filter filter={filter} handleCangeFilter={this.handleCangeFilter} />
        <ContactList data={contacts} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
