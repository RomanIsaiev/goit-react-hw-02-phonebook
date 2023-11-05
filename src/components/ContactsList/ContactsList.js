import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact data={contact} key={contact.id} />
      ))}
    </ul>
  );
};
