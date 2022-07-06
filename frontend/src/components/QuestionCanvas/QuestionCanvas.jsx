import PropTypes from "prop-types";
import React, { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { useSetCurrentPage } from "../../hooks/useSetCurrentPage";
import { speech } from "../../utils/speech";
import { Page } from "./Page";

export const QuestionCanvas = (props) => {
  const { state, setState } = useContext(MainContext);
  useSetCurrentPage(state, setState);

  const handleClick = () => speech(props.title);

  return <Page {...props} handleClick={handleClick} />;
};

QuestionCanvas.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  Canvas: PropTypes.elementType,
  clockID: PropTypes.number,
};
