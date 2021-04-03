import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    message: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, message } = this.state;
    const id = uuidv4();

    const newContact = { id: id, name: name, number: number, message: message };
    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', message: '' });
  };

  render() {
    const { name, number, message } = this.state;
    return (
      <div className="phonebook">
        <form onSubmit={this.handleSubmit} className="phonebook-form">
          <div className="phonebook-input-fielsds">
            <label htmlFor={this.nameInputId} className="phonebook-label">
              <input
                className="phonebook-input"
                name="name"
                value={name}
                type="text"
                placeholder="name"
                onChange={this.handleChange}
                required
              ></input>
            </label>
            <label className="phonebook-label">
              <input
                className="phonebook-input"
                name="number"
                value={number}
                type="tel"
                pattern="^[ 0-9]+$"
                placeholder="number"
                onChange={this.handleChange}
                required
              ></input>
            </label>
          </div>
          <div className="msg">
            <textarea
              placeholder="more information"
              className="textarea"
              name="message"
              value={message}
              onChange={this.handleChange}
            ></textarea>
            <button type="submit" className="btn">
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  message: PropTypes.string,
  onSubmit: PropTypes.func,
};
