import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = ({ name, number, massage }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
    message: massage,
  },
});

export const deleteContacts = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, deleteContacts, changeFilter };
