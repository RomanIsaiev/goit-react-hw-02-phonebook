import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          data={contact}
          key={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
