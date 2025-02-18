import React from "react";
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={styles.item}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
    