import React from "react";
import Player from "./Player";


function Footer(props) {
  
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      { props.hasSong==="true" && <Player content={props.content} index={props.index} playlist={props.playlist} />}
    </footer>
  );
}

export default Footer;
