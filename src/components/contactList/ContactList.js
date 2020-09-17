import React from 'react';
import { ContactItem } from './contactItem/ContactItem.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './contactList.module.css';
export function ContactList({ contacts, delContact }) {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map(el => (
        <CSSTransition
          key={el.id}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <ContactItem key={el.id} contact={el} delContact={delContact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
