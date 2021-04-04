import { Component } from 'react';

import { connect } from 'react-redux';

import store from '../../redux/store';
import * as actions from '../../redux/phonebook/phonebook-actions';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

function Phonebook() {
  //   state = {
  //     contacts: [],
  //     filter: '',
  //   };

  //   componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  //   }

  // componentDidUpdate(prevProps, prevState) {
  // if (this.state.contacts !== prevState.contacts) {
  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }
  // }

  //render() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* {items.length > 0 && ( */}
      <>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
      {/* )} */}
    </>
  );
}
export default Phonebook;
