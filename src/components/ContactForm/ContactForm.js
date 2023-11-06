import { nanoid } from 'nanoid';

import { Formik } from 'formik';

// import { Form, Field, FormGroup, ErrorMessage } from './QuizForm.styled';

import { Form, FormGroup, Field, SubmitButton } from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Name
          <Field type="text" name="name" id={nameInputId} />
        </FormGroup>

        <FormGroup>
          Number
          <Field type="tel" name="number" id={numberInputId} />
        </FormGroup>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};
