import React, { useEffect, useRef, useState } from "react";
import preloader from "../media/sounds/preloader.mp3";
import cursor from "../media/images/cursor.svg";

function StaticComponents(props) {
  const [sound, setSound] = useState("pause");
  const audioRef = useRef(null);

  function handleAudio() {
    setSound(sound === "play" ? "pause" : "play");
  }
  useEffect(() => {
    if (sound === "pause") audioRef.current.pause();
    else audioRef.current.play();
  }, [sound]);

  return (
    <>
      <div className={`${sound === "play" ? "wave-1" : ""}`}></div>
      <div className={`${sound === "play" ? "wave-2" : ""}`}></div>
      <audio ref={audioRef} className="audio" loop>
        <source src={preloader} type="audio/mp3" />
      </audio>

      <div className="controls">
        <div onClick={props.handlePointer}>
          {props.customCursor ? (
            <div
              title={`Set ${
                props.customCursor === false ? "Custom" : "Default"
              } Cursor`}
              className="customCursor cursor"
            ></div>
          ) : (
            <img
              title={`Set ${
                props.customCursor === false ? "Custom" : "Default"
              } Cursor`}
              className="default-pointer cursor"
              src={cursor}
              alt="Change Pointer"
            />
          )}
        </div>
        <div
          title={`${sound === "pause" ? "Play" : "Pause"} Site Audio`}
          className="music-icons cursor"
          onClick={handleAudio}
        >
          <div className={`${sound === "play" ? "bar" : ""}One bar`}></div>
          <div className={`${sound === "play" ? "bar" : ""}Two bar`}></div>
          <div className={`${sound === "play" ? "bar" : ""}Three bar`}></div>
        </div>
        <div
          title={`Apply ${props.theme === "dark" ? "Light" : "Dark"} Theme`}
          theme={props.theme}
          className="theme-toggle cursor"
          onClick={props.handleTheme}
        ></div>
      </div>
    </>
  );
}

export default StaticComponents;
