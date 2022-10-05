import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export const Page = ({
  open,
  title,
  startText,
  cancelText,
  handleStart,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>{cancelText}</Button>
        <Button onClick={handleStart} autoFocus>
          {startText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Page.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  startText: PropTypes.string,
  handleStart: PropTypes.func,
};
