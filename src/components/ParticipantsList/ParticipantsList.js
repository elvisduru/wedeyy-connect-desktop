import React from "react";
import Participant from "./Participant/Participant";
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

const ParticipantsList = props => {
  return (
    <SimpleBar style={{height: '70vh'}}>
      {props.participants.map((participant, index) => (
        <Participant
          name={participant.name}
          avatar={participant.avatar}
          added={participant.added}
          key={participant.name + index}
        />
      ))}
    </SimpleBar>
  );
};

export default ParticipantsList;
