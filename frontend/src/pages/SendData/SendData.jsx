import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

export const SendData = ({
  stopRecordingVideo,
  stopRecordingScreen,
  mediaBlobUrlVideo,
  mediaBlobUrlScreen,
}) => {
  useEffect(() => {
    stopRecordingVideo();
    stopRecordingScreen();
  }, []);

  return (
    <Box>
      <Typography>Sending data...</Typography>
      <Box>
        <Typography>Camera and microphone:</Typography>
        <video width="300" src={mediaBlobUrlVideo} controls autoPlay loop />
      </Box>

      <Box>
        <Typography>Screen:</Typography>
        <video width="300" src={mediaBlobUrlScreen} controls autoPlay loop />
      </Box>
    </Box>
  );
};
