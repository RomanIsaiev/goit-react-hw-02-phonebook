import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { nanoid } from 'nanoid';

import { ContactsList } from './ContactsList/ContactsList';

import { Filter } from './Filter/Filter';

import { Layout } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

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

  addContanct = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(prevState => {
      if (
        prevState.contacts.find(
          item =>
            item.name.toLowerCase().trim() ===
            newContact.name.toLowerCase().trim()
        )
      ) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }

      return {
        contacts: [...prevState.contacts, contact],
      };
    });
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
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContanct} />
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateName={this.updateContactsFilter} />
        {visibleContacts.length > 0 && (
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
