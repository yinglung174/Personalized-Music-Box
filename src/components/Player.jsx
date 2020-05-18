import React, { useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Player (props){ 
  
  
  const [currentMusicIndex,setState] = useState(props.index);
  var playlist = useState(props.playlist);
  let con = props.content.indexOf("http");
  let end = props.content.indexOf(".mp3");


  function handleClickPrevious(currentMusicIndex) {
    setState(prev => {
      return prev === 0 ? playlist.length - 1 : prev - 1;
    });
  }

  function handleClickNext(currentMusicIndex) {
    setState(prev => {
      return prev < playlist.length - 1 ? prev + 1 : 0;
    });
  }
  //console.log(__dirname);
  if(con===-1 || end===-1){
    return (
      <AudioPlayer
        autoPlay
        //src={playlist[currentMusicIndex].src}
        autoPlayAfterSrcChange={true}
            showSkipControls={true}
            showJumpControls={false}
        src={playlist[currentMusicIndex].src}
        onPlay={e => console.log("onPlay")}
        // other props here
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    )
  }else{

  return (
    <AudioPlayer
      autoPlay
      //src={playlist[currentMusicIndex].src}
      autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          src={props.content}
      onPlay={e => console.log("onPlay")}
      // other props here
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
    />
  )
  }
};

export default Player;
