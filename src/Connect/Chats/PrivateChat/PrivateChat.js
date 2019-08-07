import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./PrivateChat.module.css";
import OptionsOverlay from "../../../components/OptionsOverlay/OptionsOverlay";
import videoCamIcon from "../../../images/camera-video.svg";
import phoneIcon from "../../../images/phone-handset.svg";
import moreIcon from "../../../images/ic_more_vert.svg";
import attachIcon from "../../../images/attachment.svg";
import micIcon from "../../../images/mic.svg";
import smileyIcon from "../../../images/smile.svg";
import pictureIcon from "../../../images/picture.svg";
import addFileIcon from "../../../images/file-add.svg";
import userIcon from "../../../images/user.svg";
import ChatBubbleList from "../../../components/ChatBubbleList/ChatBubbleList";
import shareIcon from "../../../images/share.svg";
import usersIcon from "../../../images/users.svg";
import trashIcon from "../../../images/trash.svg";
import ShareList from "../../../components/ShareList/ShareList";
import SharedItems from "./SharedItems/SharedItems";

class PrivateChat extends Component {
  state = {
    openOptionsOverlay: false,
    openSharedItems: false,
    messages: [
      { type: "text", content: "Hello Kehinde", sender: "you", time: "Chas, 10:25 AM" },
      { type: "text", content: "I am coming home now...", sender: "you", time: "Chas, 10:25 AM" },
      { type: "text", content: "Okay, see you soon.", sender: "me", time: "10:26 AM" },
      { type: "text", content: "Hello Kehinde", sender: "you", time: "Chas, 10:25 AM" },
      { type: "text", content: "I am coming home now...", sender: "you", time: "Chas, 10:25 AM" },
      { type: "divider", content: "Yesterday" },
      { type: "text", content: "Hello, how are you doing?", sender: "me", time: "10:26 AM" },
      { type: "text", content: "Hello Kehinde", sender: "you", time: "Chas, 10:25 AM" },
      { type: "text", content: "I am coming home now...", sender: "you", time: "Chas, 10:25 AM" },
      { type: "text", content: "Hello, how are you doing?", sender: "me", time: "10:26 AM" },
      { type: "image", content: "http://i.pravatar.cc/250", sender: "me", time: "10:26 AM" },
      { type: "text", content: "Oh, what a beautiful picture.", sender: "you", time: "Chas, 10:25 AM" },
      { type: "text", content: "Wait for it.", sender: "you", time: "Chas, 10:25 AM" },
      { type: "image", content: "http://i.pravatar.cc/251", sender: "you", time: "Chas, 10:25 AM" },
      { type: "text", content: "File coming in now.", sender: "me", time: "10:26 AM" },
      { type: "file", filename: "Temple Run.APK", filetype: "APK file", filesize: "32.03MB", sender: "me", time: "10:25 AM" },
      { type: "text", content: "Please send me that link", sender: "you", time: "Chas, 10:25 AM" },
      { type: "link", content: "https://m.youtube.com/watch/UGFi7v8", sender: "me", time: "10:26 AM" },
      { type: "text", content: "Wow, thanks.", sender: "you", time: "Chas, 10:25 AM" },
      {
        type: "text",
        content: "Sending you the contacts you asked for..",
        sender: "you", time: "Chas, 10:25 AM"
      },
      {
        type: "contact",
        content: "Kehinde John Omotoso",
        rating: "3",
        sender: "you", time: "Chas, 10:25 AM"
      },
      { type: "missed", content: "Missed Video Call, 10:23 am", sender: "you", time: "Chas, 10:25 AM" }
    ]
  };

  handleOptionsOverlay = e => {
    e.stopPropagation();
    this.setState(prevState => {
      return {
        openOptionsOverlay: !prevState.openOptionsOverlay
      };
    });
  };

  stopEventPropagation = e => {
    e.stopPropagation();
  };

  openShareOverlay = () => {
    this.setState({ openShareOverlay: true, openMoreOverlay: false })
  }

  closeShareOverlay = () => {
    this.setState({ openShareOverlay: false, openOptionsOverlay: false })
  }

  render() {
    let shareOptions = [
      { icon: pictureIcon, name: "Picture or Video" },
      { icon: addFileIcon, name: "Share File" },
      { icon: userIcon, name: "Share Friend" }
    ];
    let optionsOverlay = this.state.openOptionsOverlay ? (
      <OptionsOverlay
        heading="Create and Share"
        options={shareOptions}
        click={this.handleOptionsOverlay}
        stopPropagation={this.stopEventPropagation}
        openShareOverlay={this.openShareOverlay}
        type="share"
      />
    ) : null;

    let moreOptions = [
      { icon: shareIcon, name: "View Shared Items" },
      { icon: userIcon, name: "View Chas Profile" },
      { icon: usersIcon, name: "Create a group with Chas" },
      { icon: trashIcon, name: "Clear Chat" }
    ];

    let moreOverlay = this.props.openMoreOverlay ? (
      <OptionsOverlay
        heading="More"
        options={moreOptions}
        click={this.props.handleMoreOverlay}
        stopPropagation={this.stopEventPropagation}
        type="more"
        handleSharedItems={this.props.handleSharedItems}
      />
    ) : null;

    let contacts = [
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        shared: true
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        shared: false
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        shared: false
      },
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        shared: false
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        shared: false
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        added: false
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        shared: false
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        added: false
      }
    ]

    let shareOverlay = this.state.openShareOverlay ? (
      <ShareList contacts={contacts} shareType="contact" closeShareOverlay={this.closeShareOverlay} />
    ) : null;

    let sharedItems = this.props.openSharedItems ? (
      <SharedItems handleSharedItems={this.props.handleSharedItems} />
    ) : null;

    return (
      <div className={styles.PrivateChat}>
        <div className={styles.Header}>
          {/* <img onClick={this.goBack} src={goBackIcon} alt="Go Back" /> */}
          <div>
            <img src={this.props.avatar} alt="avatar" />
            <div>
              <h3>{this.props.username}</h3>
              <small>Last Seen 2m ago</small>
            </div>
          </div>
          <div>
            <Link to="/video-call">
              <img src={videoCamIcon} alt="video chat" />
            </Link>
            <Link to="/voice-call">
              <img className={styles.phone} src={phoneIcon} alt="call" />
            </Link>
            <img src={moreIcon} alt="more" onClick={this.props.handleMoreOverlay} />
            {moreOverlay}
          </div>
        </div>
        <div className={styles.chatWrapper}>
          <ChatBubbleList messages={this.state.messages} />
        </div>
        <div className={styles.footer}>
          <textarea placeholder="Type Here." />
          <div className={styles.controls}>
            <img
              src={attachIcon}
              alt="Attachment"
              onClick={this.handleOptionsOverlay}
            />
            <img src={micIcon} alt="Mic" />
            <img src={smileyIcon} alt="Smiley" />
          </div>
          {optionsOverlay}
        </div>
        {shareOverlay}
        {sharedItems}
      </div>
    );
  }
}

export default PrivateChat;
