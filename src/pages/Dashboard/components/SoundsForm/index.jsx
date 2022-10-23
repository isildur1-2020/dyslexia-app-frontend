import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import { uploadAudio } from "../../../../services/audioService";
import { getAudiosService } from "../../../../services/audioService";
import { Page } from "./page";

export const SoundsForm = ({ state, handleChange, handleSubmit }) => {
  let audioFile = useRef();
  const [audios, setAudios] = useState([]);
  const [existsFile, setExistsFile] = useState(false);
  const [reloadAudios, setReloadAudios] = useState(false);

  const handleUploadFile = async () => {
    const formData = new FormData();
    formData.append("audio", audioFile.current);
    const resp = await uploadAudio(formData);
    setExistsFile(false);
    setReloadAudios((s) => !s);
  };

  const handleFileChange = (ev) => {
    if (!ev.target.files) return setExistsFile(false);
    setExistsFile(true);
    audioFile.current = ev.target.files[0];
  };

  // GET AUDIOS FILE
  useEffect(() => {
    const getAudios = async () => {
      const resp = await getAudiosService();
      setAudios(resp?.files);
    };
    getAudios();
  }, [reloadAudios]);

  return (
    <Page
      state={state}
      audios={audios}
      existsFile={existsFile}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleUploadFile={handleUploadFile}
      handleFileChange={handleFileChange}
    />
  );
};

SoundsForm.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
