import PropTypes from 'prop-types';

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

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDelete: PropTypes.func,
};
