import React from 'react';
import styles from './contactItem.module.css';

export function ContactItem({ contact: { name, number, id }, delContact }) {
  return (
    <li className={styles.contactItems}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        data-id={id}
        onClick={e => {
          delContact(e.target.dataset.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
