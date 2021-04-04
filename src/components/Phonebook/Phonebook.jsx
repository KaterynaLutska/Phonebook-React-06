import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

function Phonebook() {
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
