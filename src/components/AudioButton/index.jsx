import PropTypes from "prop-types";
import React, { useState, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { BACK_URL } from "../../axios/axiosInstance";

export const AudioButton = ({ audioSrc }) => {
  const audioRef = useRef();
  const [isPlay, setIsPlay] = useState(false);

  const handleAudio = () => {
    if (!isPlay) {
      audioRef.current.play();
      return setIsPlay(true);
    }
    audioRef.current.pause();
    setIsPlay(false);
  };

  const src = `${BACK_URL}/audios/${audioSrc}`;

  return (
    <>
      {src && (
        <audio controls style={{ display: "none" }} ref={audioRef}>
          <source src={src} type="audio/mp3" />
        </audio>
      )}
      <IconButton onClick={handleAudio}>
        {!isPlay ? (
          <VolumeUpIcon fontSize="large" color="primary" />
        ) : (
          <VolumeOffIcon fontSize="large" color="primary" />
        )}
      </IconButton>
    </>
  );
};

AudioButton.propTypes = {
  src: PropTypes.string,
};
