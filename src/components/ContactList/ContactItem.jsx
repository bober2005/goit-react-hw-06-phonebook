import React from 'react';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redax/contactFormReduсer';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
}
