import React from "react";
import { Page } from "./Page";
import PropTypes from "prop-types";

export const QuestionList = (props) => <Page {...props} />;

QuestionList.propTypes = {
  title: PropTypes.string,
  clockID: PropTypes.number,
  fontSize: PropTypes.string,
  audioSrc: PropTypes.string,
  textStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

QuestionList.defaultProps = {
  fontSize: "h4",
  textStyle: {},
};
