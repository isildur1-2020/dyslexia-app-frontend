import React, { useState, useEffect, useRef } from "react";

export const WebCam = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const streamRecorderRef = useRef(null);
  const [error, setError] = useState(false);
  const chunks = useRef([]);
  const [downloadLink, setDownloadLink] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioSource, setAudioSource] = useState("");
  const [videoSource, setVideoSource] = useState("");
  const [audioSourceOptions, setAudioSourceOptions] = useState([]);
  const [videoSourceOptions, setVideoSourceOptions] = useState([]);

  useEffect(() => {
    try {
      if (isRecording) return;
      if (chunks.current.length === 0) return;
      console.log("Creando video");
      console.log(chunks);
      const blob = new Blob(chunks.current, {
        type: "video/x-matroska;codecs=avc1,opus",
      });
      console.log(blob);
      setDownloadLink(URL.createObjectURL(blob));
      chunks.current = [];
    } catch (err) {
      console.log(err);
    }
  }, [isRecording]);

  const startRecording = () => {
    if (isRecording) return;
    if (!streamRef.current) return;
    streamRecorderRef.current = new MediaRecorder(streamRef.current);
    console.log("Grabando");
    streamRecorderRef.current.start();
    streamRecorderRef.current.ondataavaliable = (ev) => {
      console.log("CHUNKS DATA", ev.data);
      chunks.push(ev.data);
    };
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (!streamRecorderRef.current) return;
    streamRecorderRef.current.stop();
    setIsRecording(false);
    console.log("Parar");
  };

  const prepareStream = async () => {
    const gotStream = (stream) => {
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    const getDevices = () => {
      return navigator.mediaDevices.enumerateDevices();
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

    const gotDevices = (deviceInfos) => {
      const audioSourceOptions = [];
      const videoSourceOptions = [];
      for (const deviceInfo of deviceInfos) {
        if (deviceInfo.kind === "audioinput") {
          audioSourceOptions.push({
            value: deviceInfo.deviceId,
            label: deviceInfo.label || `Microphone ${deviceInfo.deviceId}`,
          });
        } else if (deviceInfo.kind === "videoinput") {
          videoSourceOptions.push({
            value: deviceInfo.deviceId,
            label: deviceInfo.label || `Camera ${deviceInfo.deviceId}`,
          });
        }
      }
      setAudioSourceOptions(audioSourceOptions);
      setVideoSourceOptions(videoSourceOptions);
    };

    await getStream();
    const mediaDevices = await getDevices();
    gotDevices(mediaDevices);
  };

  useEffect(() => {
    prepareStream();
  }, []);

  return (
    <div>
      <select id="videoSource" name="videoSource" value={videoSource}>
        {videoSourceOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <select id="audioSource" name="audioSource" value={audioSource}>
        {audioSourceOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <video ref={videoRef} autoPlay muted playsInline></video>
      <button onClick={startRecording}>Grabar</button>
      <button onClick={stopRecording}>Parar</button>
      <div>
        {downloadLink && <video src={downloadLink} controls></video>}
        {downloadLink && (
          <a href={downloadLink} download="file.mp4">
            Descargar
          </a>
        )}
      </div>
      {error && error}
    </div>
  );
};
