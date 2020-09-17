import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './form.module.css';
export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  submitForm = e => {
    e.preventDefault();
    const elem = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.props.onAddContact(elem);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form onSubmit={this.submitForm}>
          <div className={styles.formSection}>
            <label className={styles.label}>
              Name
              <input
                name="name"
                type="text"
                className={styles.input}
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Number
              <input
                name="number"
                type="text"
                className={styles.input}
                value={this.state.number}
                onChange={this.handleChange}
                required
              />
            </label>
            <button type="submit" className={styles.btn}>
              Add Contact
            </button>
          </div>
        </form>
      </>
    );
  }
}
