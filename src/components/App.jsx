import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSumbit = event => {
    event.preventDefault();
    console.log(this.state);

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = form.elements.name.value;

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

  render() {
    return (
      <div>
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
          <button type="submit">add contact</button>
        </form>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id} className={this.state.name}>
              Name: {contact.name} Number: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
