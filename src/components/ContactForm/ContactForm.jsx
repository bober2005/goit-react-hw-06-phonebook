import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';

import { addContact } from 'redax/contactFormReduсer';

const ContactForm = () => {
  const [fields, setFields] = useState({ name: '', number: '' });

  const dispatch = useDispatch();

  const handleInputChange = event => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactData = {
      id: nanoid(),
      name: fields.name,
      number: fields.number,
    };

    dispatch(addContact(contactData));

    setFields({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className={css.title}>Name</span>
        <input
          onChange={handleInputChange}
          value={fields.name}
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        <span className={css.title}>Number</span>
        <input
          onChange={handleInputChange}
          value={fields.number}
          type="tel"
          name="number"
          required
        />
      </label>
      <span className={css.btn}>
        <button type="submit">Add contact</button>
      </span>
    </form>
  );
};

export default ContactForm;

//   import React, { useState } from 'react';
// import { nanoid } from 'nanoid';

// import css from './ContactForm.module.css';

// const ContactForm = ({addContact}) => {
// const [fields, setFields] = useState({name: '', number: ''})

//   const handleInputChange = event => {
//     setFields({...fields, [event.target.name]: event.target.value})
//   };

//   const handleSubmit = event => {

//     event.preventDefault();

//     const contactData = {
//       id: nanoid(),
//       name: fields.name,
//       number: fields.number,
//       }

//     addContact(contactData);

//     setFields({name: '', number: ''});
//   }

//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span className={css.title}>Name</span>
//           <input
//             onChange={handleInputChange}
//             value={fields.name}
//             type="text"
//             name="name"
//             required
//           />
//         </label>
//         <label>
//           <span className={css.title}>Number</span>
//           <input
//             onChange={handleInputChange}
//             value={fields.number}
//             type="tel"
//             name="number"
//             required
//           />
//         </label>
//         <span className={css.btn}>
//           <button type="submit">Add contact</button>
//         </span>
//       </form>
//     )
// }

//   export default ContactForm
