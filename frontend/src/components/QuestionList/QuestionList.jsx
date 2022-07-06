import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MainContext } from "../../contexts/MainContext";
import { useSetCurrentPage } from "../../hooks/useSetCurrentPage";
import { speech } from "../../utils/speech";
import { Page } from "./Page";

export const QuestionList = (props) => {
  const { state, setState } = useContext(MainContext);
  useSetCurrentPage(state, setState);
  const handleClick = () => speech(props.title);
  return <Page {...props} handleClick={handleClick} />;
};

QuestionList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  textStyle: PropTypes.object,
  clockID: PropTypes.number,
};

QuestionList.defaultProps = {
  fontSize: "h4",
  textStyle: {},
};
