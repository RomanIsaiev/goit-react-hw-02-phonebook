import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { nanoid } from 'nanoid';

import { ContactsList } from './ContactsList/ContactsList';

import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleSumbit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

    if (
      this.state.contacts.find(
        item => item.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.state.contacts.push({ name, number, id });
    this.reset();
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  updateContactsFilter = newContanct => {
    this.setState({
      filter: newContanct,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(item => {
      const hasContact = item.name.toLowerCase().includes(filter.toLowerCase());
      return hasContact;
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addContacts={this.handleSumbit}
          onUpdateInput={this.handleInputChange}
          numberValue={this.state.number}
          nameValue={this.state.name}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateName={this.updateContactsFilter} />
        {visibleContacts.length > 0 && (
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
