import "./Videoplayer.css";
import videopxy from "./../../assets/videopxy.png";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function Videoplayer({ playState, setPlayState }) {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`vid-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={videopxy} autoPlay muted controls></video>
    </div>
  );
}

export default Videoplayer;
