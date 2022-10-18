import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const Page = ({ name, value, handleChange, languajes }) => (
  <Select
    fullWidth
    displayEmpty
    name={name}
    value={value}
    onChange={handleChange}
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    {languajes.length > 0 &&
      languajes.map((lang) => (
        <MenuItem key={lang} value={lang}>
          {lang.toLocaleUpperCase()}
        </MenuItem>
      ))}
  </Select>
);

Page.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  languajes: PropTypes.arrayOf(PropTypes.string),
};
