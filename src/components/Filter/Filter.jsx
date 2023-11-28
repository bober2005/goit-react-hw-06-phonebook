import React from 'react';
import css from '../ContactForm/ContactForm.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redax/contactFormReduсer';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label>
      <span className={css.title}>Find contacts by name</span>
      <input
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        name="filter"
        type="text"
      />
    </label>
  );
}
