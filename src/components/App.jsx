import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        {contacts.length === 0 ? (
          <p>No contacts</p>
        ) : (
          <ContactList
            contacts={contacts}
            filter={filter}
            onDeleteContact={this.handleDeleteContact}
          />
        )}
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  handleDeleteContact: PropTypes.func,
  addContact: PropTypes.func,
  handleFilterChange: PropTypes.func,
};
