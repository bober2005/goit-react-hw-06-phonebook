import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { FormEl } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';

const schema = yup.object().shape({
  name: yup.string().min(4).max(32).required(),
  number: yup.string().min(6).max(16).required(),
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const formSubmitHandler = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(addContact(contact));
  };

  const value = { name, number };

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newState = {
      id: nanoid(),
      name,
      number,
    };
    formSubmitHandler(newState);

    resetForm();
  };

  return (
    <Formik
      initialValues={value}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormEl>
        <label htmlFor="nameId">Name</label>
        <Field
          type="text"
          name="name"
          placeholder="Rosie Simpson"
          id="nameId"
        />
        <ErrorMessage name="name" />
        <label htmlFor="numId">Number</label>
        <Field
          type="tel"
          name="number"
          placeholder="066-459-12-56"
          id="numId"
        />
        <ErrorMessage name="number" />

        <button type="submit">Add contact</button>
      </FormEl>
    </Formik>
  );
};

export default ContactForm;
