import React, { useRef } from 'react';
import Video from "./Video";
import Buttons from './Buttons';

function App() {
      const vidRef = useRef();
      const handlePlayVideo = () => {
        vidRef.current.play();
      };
      const handlePauseVideo = () => {
        vidRef.current.pause();
      };
  return (
    <div>
        <Video vidRef={vidRef}></Video>
        <Buttons handlePauseVideo={handlePauseVideo} handlePlayVideo={handlePlayVideo}></Buttons>
    </div>
  )
}

export default App;



