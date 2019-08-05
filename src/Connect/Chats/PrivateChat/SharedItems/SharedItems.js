import React, { Component } from "react";
import styles from "./SharedItems.module.css";
import crossIcon from "../../../../images/cross.svg";
import img1 from "../../../../images/alice-donovan-rouse-171566.png";

import ShareList from "../../../../components/ShareList/ShareList";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import SharedItem from "./SharedItem/SharedItem";

class SharedItems extends Component {
  state = {
    openMoreOverlay: false,
    openShareOverlay: false,
    sharedItems: [
      {type: "image", src: img1},
      { type: "file", fileName: "Temple Run Version 2.0.APK", fileSize: "32.03MB", fileType: "APK file"},
      { type: "link", url: "https://m.youtube.com/watch/UGFi7v8"},
      {
        type: "contact",
        name: "Kehinde John Omotoso",
        rating: "3",
      },
    ]
  };

  handleMoreOverlay = e => {
    e.stopPropagation();
    this.setState((state, props) => {
      return {
        openMoreOverlay: !this.state.openMoreOverlay
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
    this.setState({ openShareOverlay: false })
  }


  render() {
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
      }
    ]

    let shareOverlay = this.state.openShareOverlay ? (
      <ShareList contacts={contacts} shareType="item" closeShareOverlay={this.closeShareOverlay} />
    ) : null;

    return (
      <div className={styles.SharedItems}>
        <div className={styles.header}>
          <img style={{cursor: 'pointer'}} src={crossIcon} alt="close" onClick={this.props.handleSharedItems} />
          <h3>Shared Items</h3>
        </div>
        <SimpleBar style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '20px 0',
          height: '93%'
        }}>
          {this.state.sharedItems.map((content, index) => (
            <SharedItem content={content} key={index} />
          ))}
        </SimpleBar>
        {shareOverlay}
      </div>
    );
  }
}

export default SharedItems;
