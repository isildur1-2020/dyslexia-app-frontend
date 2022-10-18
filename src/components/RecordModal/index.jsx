import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setHideRecordModal } from "../../redux/actions/main";
import { Page } from "./page";

export const RecordModal = ({ title, startText, cancelText, handleStart }) => {
  const dispatch = useDispatch();
  const { showRecordModal } = useSelector((s) => s?.mainState);
  const handleClose = () => dispatch(setHideRecordModal());
  return (
    <Page
      title={title}
      startText={startText}
      open={showRecordModal}
      cancelText={cancelText}
      handleClose={handleClose}
      handleStart={handleStart}
    />
  );
};

Page.propTypes = {
  title: PropTypes.string,
  cancelText: PropTypes.string,
  startText: PropTypes.string,
  handleStart: PropTypes.func,
};
