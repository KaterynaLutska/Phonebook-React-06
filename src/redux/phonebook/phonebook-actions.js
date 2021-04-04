import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction(
  'phonebook/ADD',
  ({ name, number, message }) => ({
    payload: {
      id: uuidv4(),
      name: name,
      number: number,
      message: message,
    },
  }),
);

const deleteContacts = createAction('phonebook/DELETE');
const changeFilter = createAction('phonebook/FILTER');

export default { addContact, deleteContacts, changeFilter };
