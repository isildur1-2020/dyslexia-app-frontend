import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const UserForm = ({ state, handleChange, handleSubmit }) => {
  const { username, password, tests } = state;
  return (
    <form onSubmit={handleSubmit}>
      <Box width={250}>
        <Box mb={2}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={username}
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            value={password}
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            id="tests"
            name="tests"
            label="Tests"
            type="number"
            value={tests}
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button
            fullWidth
            type="submit"
            variant="outlined"
            disabled={!username || !password}
          >
            create user
          </Button>
        </Box>
      </Box>
    </form>
  );
};

UserForm.propTypes = {
  state: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
