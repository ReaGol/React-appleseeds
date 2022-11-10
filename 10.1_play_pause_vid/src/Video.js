import React from "react";

function Video(props) {

  return (
    <div>
      <video width={"500px"} ref={props.vidRef}>
        <source
          src='https://www.youtube.com/watch?v=p7OUQ9U2qIw'
          type='video/mp4'
        />
      </video>
    </div>
  );
}

export default Video;
