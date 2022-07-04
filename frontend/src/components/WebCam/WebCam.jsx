import React, { useState, useEffect, useRef } from "react";

export const WebCam = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [error, setError] = useState(false);
  const [audioSource, setAudioSource] = useState("");
  const [videoSource, setVideoSource] = useState("");

  const prepareStream = async () => {
    const gotStream = (stream) => {
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    const getStream = async () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      const constrains = {
        audio: {
          deviceId: audioSource !== "" ? { exact: audioSource } : undefined,
        },
        video: {
          deviceId: videoSource !== "" ? { exact: videoSource } : undefined,
        },
      };

      try {
        const stream = await navigator.mediaDevices.getUserMedia(constrains);
        gotStream(stream);
      } catch (error) {
        setError(error);
      }
    };
    await getStream();
  };

  useEffect(() => {
    prepareStream();
  }, []);

  return (
    <div>
      <select id="videoSource" name="videoSource" value={videoSource}></select>
      <select id="audioSource" name="audioSource" value={audioSource}></select>
      <video ref={videoRef} autoPlay muted playsInline></video>
      {error && error}
    </div>
  );
};
