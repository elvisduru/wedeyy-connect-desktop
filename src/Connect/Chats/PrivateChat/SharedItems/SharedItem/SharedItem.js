import React, { Component } from 'react';
import styles from './SharedItem.module.css';

import OptionsOverlay from "../../../../../components/OptionsOverlay/OptionsOverlay";

import img1 from "../../../../../images/alice-donovan-rouse-171566.png";
import img2 from "../../../../../images/chaz-mcgregor-51043.png";
import img3 from "../../../../../images/philipp-kammerer-346387.png";
import StarRatingComponent from "react-star-rating-component";
import moreIcon from "../../../../../images/more.svg";

import linkIcon from "../../../../../images/link.svg";
import downloadIcon from "../../../../../images/download.svg";
import copyIcon from "../../../../../images/select.svg";
import trashIcon from "../../../../../images/trash.svg";
import shareIcon from "../../../../../images/share.svg";

class SharedItem extends Component {

  state = {
    openMoreOverlay: false,
  }

  handleMoreOverlay = e => {
    e.stopPropagation();
    this.setState((state, props) => {
      return {
        openMoreOverlay: !this.state.openMoreOverlay
      };
    });
  };

  render() {
    let content;

    var moreOptions;

    if (this.props.content.type === "image") {
      moreOptions = [
        { icon: downloadIcon, name: "Download" },
        { icon: copyIcon, name: "Copy Link" },
        { icon: trashIcon, name: "Delete just for me" },
        { icon: trashIcon, name: "Delete for All" },
        { icon: shareIcon, name: "Share" }
      ];
      content = (
        <div className={styles.image}>
          <img
            src={moreIcon}
            alt="more"
            className={styles.more}
            onClick={this.handleMoreOverlay}
          />
          <img src={img1} alt="" />
          {this.state.openMoreOverlay ? (
            <OptionsOverlay
              heading="Options"
              options={moreOptions}
              click={this.handleMoreOverlay}
              stopPropagation={this.stopEventPropagation}
              openShareOverlay={this.openShareOverlay}
              type="sharedItems"
            />
          ) : null}
        </div>
      )
    } else if (this.props.content.type === "link") {
      moreOptions = [
        { icon: linkIcon, name: "Open Link" },
        { icon: copyIcon, name: "Copy Link" },
        { icon: trashIcon, name: "Delete just for me" },
        { icon: trashIcon, name: "Delete for All" },
        { icon: shareIcon, name: "Share" }
      ];
      content = (
        <div className={styles.link}>
          <img
            src={moreIcon}
            alt="more"
            className={styles.more}
            onClick={this.handleMoreOverlay}
          />
          <img src={img2} alt="" />
          <small>{this.props.content.url}</small>
          {this.state.openMoreOverlay ? (
            <OptionsOverlay
              heading="Options"
              options={moreOptions}
              click={this.handleMoreOverlay}
              stopPropagation={this.stopEventPropagation}
              openShareOverlay={this.openShareOverlay}
              type="sharedItems"
            />
          ) : null}
        </div>
      )
    } else if (this.props.content.type === "file") {
      moreOptions = [
        { icon: downloadIcon, name: "Download" },
        { icon: copyIcon, name: "Copy Link" },
        { icon: trashIcon, name: "Delete just for me" },
        { icon: trashIcon, name: "Delete for All" },
        { icon: shareIcon, name: "Share" }
      ];
      content = (
        <div className={styles.file}>
          <img
            src={moreIcon}
            alt="more"
            className={styles.more}
            onClick={this.handleMoreOverlay}
          />
          <div>
            <p>{this.props.content.fileName}</p>
            <small>{this.props.content.fileType}, {this.props.content.fileSize}</small>
          </div>
          {this.state.openMoreOverlay ? (
            <OptionsOverlay
              heading="Options"
              options={moreOptions}
              click={this.handleMoreOverlay}
              stopPropagation={this.stopEventPropagation}
              openShareOverlay={this.openShareOverlay}
              type="sharedItems"
            />
          ) : null}
        </div>
      )
    } else if (this.props.content.type === "contact") {
      moreOptions = [
        { icon: copyIcon, name: "Copy Link" },
        { icon: trashIcon, name: "Delete just for me" },
        { icon: trashIcon, name: "Delete for All" },
        { icon: shareIcon, name: "Share" }
      ];
      content = (
        <div className={styles.contact}>
          <img
            src={moreIcon}
            alt="more"
            className={styles.more}
            onClick={this.handleMoreOverlay}
          />
          <img src={img3} alt="" />
          <div>
            <div className={styles.top}>
              <h4>{this.props.content.name}</h4>
              <StarRatingComponent
                name="rate"
                editing={false}
                starCount={5}
                value={this.props.content.rating}
                starColor="#000000"
                emptyStarColor="#707070"
              />
            </div>
            <div className={styles.bottom}>
              <button>VIEW PROFILE</button>
              <button>FOLLOW</button>
            </div>
          </div>
          {this.state.openMoreOverlay ? (
            <OptionsOverlay
              heading="Options"
              options={moreOptions}
              click={this.handleMoreOverlay}
              stopPropagation={this.stopEventPropagation}
              openShareOverlay={this.openShareOverlay}
              type="sharedItems"
            />
          ) : null}
        </div>
      )
    }

    return content;
  }
}

export default SharedItem;
