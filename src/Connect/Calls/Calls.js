import React, { Component } from "react";
import styles from "./Calls.module.css";
import ContactList from "../../components/ContactList/ContactList";

class Calls extends Component {
  state = {
    contacts: [
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        lastMessage: "Voice Call Lasted 03:08",
        time: "2:22am"
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        lastMessage: "Missed Video Call",
        time: "2:22am"
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        lastMessage: "Video Call Lasted 08:11",
        time: "2:22am"
      }
    ]
  };
  render() {
    return (
      <div className={styles.Calls}>
        <h2>Calls</h2>
        <ContactList handlePrivateChat={this.props.handlePrivateChat} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Calls;
