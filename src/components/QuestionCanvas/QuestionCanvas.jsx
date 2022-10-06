import React from "react";
import PropTypes from "prop-types";
import { Page } from "./Page";

export const QuestionCanvas = (props) => {
  const handleClick = () => {};
  return <Page {...props} handleClick={handleClick} />;
};

QuestionCanvas.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  Canvas: PropTypes.elementType,
  clockID: PropTypes.number,
  handleClick: PropTypes.func,
};
