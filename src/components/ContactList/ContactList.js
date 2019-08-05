import React from "react";
import styles from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactList = props => {
  let contacts;
  if (props.groupList) {
    contacts = props.contacts.map((contact, index) => (
      <div onClick={() => props.handlePrivateChat(contact.name, contact.lastMessage, contact.avatar)} key={index}>
        <Contact
          name={contact.name}
          avatar={contact.avatar}
          lastMessage={contact.lastMessage}
          time={contact.time}
          lastUser={contact.lastUser}
        />
      </div>
    ));
  } else {
    contacts = props.contacts.map((contact, index) => (
      <div onClick={() => props.handlePrivateChat(contact.name, contact.lastMessage, contact.avatar)} key={index}>
        <Contact
          name={contact.name}
          avatar={contact.avatar}
          lastMessage={contact.lastMessage}
          time={contact.time}
        />
      </div>
    ));
  }
  return (
    <div className={styles.ContactList}>
      {props.createBtn ? <button>{props.createBtn}</button> : null}
      {contacts}
    </div>
  );
};

export default ContactList;
