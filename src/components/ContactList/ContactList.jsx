import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  handleDelete = id => {
    this.props.onDeleteContact(id);
  };

  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name} - {contact.number}
            </span>
            <button onClick={() => this.handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
