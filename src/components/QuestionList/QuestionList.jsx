import React from "react";
import { Page } from "./Page";
import PropTypes from "prop-types";

export const QuestionList = (props) => {
  const handleClick = () => {};
  return <Page {...props} handleClick={handleClick} />;
};

QuestionList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  textStyle: PropTypes.object,
  clockID: PropTypes.number,
};

QuestionList.defaultProps = {
  fontSize: "h4",
  textStyle: {},
};
