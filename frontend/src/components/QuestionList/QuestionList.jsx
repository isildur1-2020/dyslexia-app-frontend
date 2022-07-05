import React from "react";
import PropTypes from "prop-types";
import { Page } from "./Page";

export const QuestionList = (props) => <Page {...props} />;

QuestionList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  textStyle: PropTypes.object,
};

QuestionList.defaultProps = {
  fontSize: "h4",
  textStyle: {},
};
