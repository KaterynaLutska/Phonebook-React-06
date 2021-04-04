import { combineReducers } from 'redux';
import types from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    //return [...state, playload.filter(el => el.id !== playload)];

    case types.DELETE:
      return state.filter(el => el.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
