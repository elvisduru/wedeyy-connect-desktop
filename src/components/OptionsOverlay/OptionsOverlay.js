import React from "react";
import styles from "./OptionsOverlay.module.css";

const Options = props => {
  return (      
    <div className={props.type === "more" ? styles.MoreOverlay : props.type === "sharedItems" ? styles.SharedItemsMoreOverlay : styles.ShareOverlay} onClick={props.click}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1
      }} onClick={props.click}></div>
      <div className={styles.content} onClick={props.stopPropagation}>
        {/* <div className={styles.header}>
          <img src={crossIcon} alt="close" onClick={props.click} style={{cursor: 'pointer'}} />
          <h3>{props.heading}</h3>
        </div> */}
        <div className={styles.options}>
          {props.options.map((option, index) => {
            if (option.name === "View Shared Items") {
              return (
                <div className={styles.option} key={option.name + index} onClick={props.handleSharedItems}>
                  <p>{option.name}</p>
                </div>
              )
            } else if (option.name.startsWith("Share")) {
              return (
                <div className={styles.option} key={option.name + index} onClick={props.openShareOverlay}>
                  <p>{option.name}</p>
                </div>
              )
            } else {
              return (
                <div className={styles.option} key={option.name + index}>
                  <p>{option.name}</p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Options;
