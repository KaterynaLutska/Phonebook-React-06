import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../redux/phonebook/phonebook-actions';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className="contact-list">
        {contacts.map(el => (
          <li key={el.id} className="contact-item">
            {el.name + ':'}
            <span className="contact-span">{el.number}</span>
            <p className="contact-message">{el.message}</p>
            <button onClick={() => onDelete(el.id)} className="btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalize = filter.toLowerCase();

  return allContacts.filter(el => el.name.toLowerCase().includes(normalize));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
