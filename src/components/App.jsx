import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { nanoid } from 'nanoid';

import { ContactsList } from './ContactsList/ContactsList';

import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSumbit = event => {
    event.preventDefault();
    console.log(this.state);

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();

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

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSumbit}>
          <label htmlFor={this.loginInputId}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameInputId}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={this.numberInputId}
              value={this.state.number}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <SearchBar filter={filter} onUpdateName={this.updateContactsFilter} />
        {contacts.length > 0 && <ContactsList contacts={contacts} />}
      </div>
    );
  }
}
