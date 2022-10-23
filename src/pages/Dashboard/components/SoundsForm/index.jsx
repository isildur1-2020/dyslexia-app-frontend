import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { getAudiosService } from "../../../../services/audioService";
import { Page } from "./page";

export const SoundsForm = ({ state, handleChange, handleSubmit }) => {
  const [audios, setAudios] = useState([]);

  const handleUploadFile = () => {
    const formData = new FormData();
  };

  // GET AUDIOS FILE
  useEffect(() => {
    const getAudios = async () => {
      const resp = await getAudiosService();
      setAudios(resp?.files);
    };
    getAudios();
  }, []);

  return (
    <Page
      state={state}
      audios={audios}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleUploadFile={handleUploadFile}
    />
  );
};

SoundsForm.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
