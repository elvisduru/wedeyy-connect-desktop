import React, { Component } from "react";
import styles from "./Contacts.module.css";
import ContactList from "../../components/ContactList/ContactList";
import SearchBar from "../../components/SearchBar/SearchBar";

class Contacts extends Component {
  state = {
    contacts: [
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        lastMessage: "I am coming home now...",
        time: "2:22am"
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        lastMessage: "Why did you not answer my calls?",
        time: "2:22am"
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        lastMessage: "Hello Frank, called to check on mum.",
        time: "2:22am"
      },
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        lastMessage: "I am coming home now...",
        time: "2:22am"
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        lastMessage: "Why did you not answer my calls?",
        time: "2:22am"
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        lastMessage: "Hello Frank, called to check on mum.",
        time: "2:22am"
      },
      {
        name: "Ashly Arteaga",
        avatar: "http://i.pravatar.cc/104",
        lastMessage: "Hi baby, i am off to work.",
        time: "2:22am"
      },
      {
        name: "Lucilla Srour",
        avatar: "http://i.pravatar.cc/101",
        lastMessage: "Micheal told me about it.",
        time: "2:22am"
      },
      {
        name: "Ena Rosas",
        avatar: "http://i.pravatar.cc/102",
        lastMessage: "Hey Mercy, you need to check this out.",
        time: "2:22am"
      },
      {
        name: "Rosette Sizelove",
        avatar: "http://i.pravatar.cc/103",
        lastMessage: "I am coming home now...",
        time: "2:22am"
      }
    ]
  };

  render() {
    return (
      <div className={styles.Contacts}>
        <SearchBar placeholder="Find Contact" />
        <h2>Contacts</h2>
        <ContactList handlePrivateChat={this.props.handlePrivateChat} heading="Contacts" url='contacts' contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Contacts;
