import React from "react";
import PropTypes from "prop-types";
import { Page } from "./page";

export const LanguajesForm = ({ state, handleChange, handleSubmit }) => (
  <Page state={state} handleChange={handleChange} handleSubmit={handleSubmit} />
);

LanguajesForm.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
