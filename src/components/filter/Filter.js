import React from 'react';
import styles from '../contactForm/form.module.css';
export function Filter({ getFilterName }) {
  const getValue = ({ target: { value } }) => {
    getFilterName(value);
  };
  return (
    <div className={styles.formSection}>
      <label className={styles.label}>
        Find contacts by name
        <input
          onChange={getValue}
          type="text"
          className={styles.input}
          name="filter"
          placeholder="Enter name"
        />
      </label>
    </div>
  );
}
