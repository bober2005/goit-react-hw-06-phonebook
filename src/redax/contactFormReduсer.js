import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filter: '',
  contacts: [],
};

const contactFormSlice = createSlice({
  // Ім'я слайсу
  name: 'contactForm',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      const isDublicate = state.contacts.some(
        el => el.name === action.payload.name
      );

      if (isDublicate) {
        window.alert(`${action.payload.name} is already in contacts.`);
        return;
      }

      state.contacts = [...state.contacts, action.payload];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact, setFilter } =
  contactFormSlice.actions;
// Редюсер слайсу
export const contactFormReducer = contactFormSlice.reducer;
