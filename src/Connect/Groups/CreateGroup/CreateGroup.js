import React, { Component } from "react";
import styles from "./CreateGroup.module.css";
import OverlayHeader from "../../../components/OverlayHeader/OverlayHeader";
import cameraIcon from "../../../images/camera.svg";
import cx from "classnames";
import chevronRightIcon from "../../../images/chevron-right.svg";
import ParticipantsList from "../../../components/ParticipantsList/ParticipantsList";

class CreateGroup extends Component {
  state = {
    openParticipantsOverlay: false,
    participants: [
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        added: true
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        added: false
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        added: false
      },
      {
        name: "Chas Mccawley",
        avatar: "http://i.pravatar.cc/101",
        added: false
      },
      {
        name: "Karyl Philpott",
        avatar: "http://i.pravatar.cc/102",
        added: false
      },
      {
        name: "Eugene Rosen",
        avatar: "http://i.pravatar.cc/103",
        added: false
      }
    ]
  };

  openParticipantsOverlay = () => {
    this.setState({ openParticipantsOverlay: true });
  };

  closeParticipantsOverlay = () => {
    this.setState({ openParticipantsOverlay: false });
  };

  render() {
    let participantsOverlay = this.state.openParticipantsOverlay ? (
      <div className={styles.ParticipantsOverlay}>
        <OverlayHeader
          title="Select Participants"
          click={this.closeParticipantsOverlay}
        />
        <ParticipantsList participants={this.state.participants} />
        <div className={styles.overlayFooter}>
          <button onClick={this.closeParticipantsOverlay}>
            <img src={chevronRightIcon} alt="left" className={styles.left} />
          </button>
          <button onClick={this.props.handleCreateGroup}>
            <img src={chevronRightIcon} alt="right" />
          </button>
        </div>
      </div>
    ) : null;
    return (
      <div className={styles.OverlayWrapper}>
        <div className={styles.backdrop} onClick={this.props.handleCreateGroup}></div>
        <div className={styles.CreateGroup}>
          <OverlayHeader title="Create Group" click={this.props.handleCreateGroup} />
          <div className={styles.profilePic}>
            <img src={cameraIcon} alt="" />
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Enter Group Name" />
            <form>
              <ul className={styles.select}>
                <li>
                  <input
                    className={styles.select_close}
                    type="radio"
                    name="group"
                    id="awesomeness-close"
                    value=""
                  />
                  <span
                    className={cx(
                      styles.select_label,
                      styles.select_label_placeholder
                    )}
                  >
                    Select Group Type
                </span>
                </li>

                <li className={styles.select_items}>
                  <input
                    className={styles.select_expand}
                    type="radio"
                    name="group"
                    id="group-opener"
                  />
                  <label
                    className={styles.select_closeLabel}
                    htmlFor="awesomeness-close"
                  />

                  <ul className={styles.select_options}>
                    <li className={styles.select_option}>
                      <input
                        className={styles.select_input}
                        type="radio"
                        name="group"
                        id="group-family"
                      />
                      <label
                        className={styles.select_label}
                        htmlFor="group-family"
                      >
                        Family
                    </label>
                    </li>

                    <li className={styles.select_option}>
                      <input
                        className={styles.select_input}
                        type="radio"
                        name="group"
                        id="group-community"
                      />
                      <label
                        className={styles.select_label}
                        htmlFor="group-community"
                      >
                        Community
                    </label>
                    </li>
                  </ul>

                  <label
                    className={styles.select_expandLabel}
                    htmlFor="group-opener"
                  />
                </li>
              </ul>
            </form>
          </div>
          <button className={styles.next} onClick={this.openParticipantsOverlay}>
            <img src={chevronRightIcon} alt="next" />
          </button>
          {participantsOverlay}
        </div>
      </div>
      );
  }
}

export default CreateGroup;
