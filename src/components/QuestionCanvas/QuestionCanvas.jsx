import React from "react";
import PropTypes from "prop-types";
import { Page } from "./Page";

export const QuestionCanvas = (props) => <Page {...props} />;

QuestionCanvas.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  Canvas: PropTypes.elementType,
  clockID: PropTypes.number,
  audioSrc: PropTypes.string,
};
