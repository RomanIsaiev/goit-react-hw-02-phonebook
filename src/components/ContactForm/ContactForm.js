import { nanoid } from 'nanoid';

import { Formik } from 'formik';

import {
  InputsForm,
  LabelForm,
  FormInput,
  SubmitButton,
} from './ContactForm.styled';

export const ContactForm = ({
  addContacts,
  onUpdateInput,
  numberValue,
  nameValue,
}) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <InputsForm onSubmit={addContacts}>
      <LabelForm htmlFor={nameInputId}>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          value={nameValue}
          onChange={onUpdateInput}
        />
      </LabelForm>
      <LabelForm htmlFor={numberInputId}>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberInputId}
          value={numberValue}
          onChange={onUpdateInput}
          required
        />
      </LabelForm>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </InputsForm>
  );
};
