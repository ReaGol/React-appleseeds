import React from "react";
import "./Buttons.css";

function Buttons(props) {
  return (
    <div>
      <button id='playButton' onClick={props.handlePlayVideo}>
        Play
      </button>

      <button id='pauseButton' onClick={props.handlePauseVideo}>
        Pause
      </button>
    </div>
  );
}

export default Buttons;
