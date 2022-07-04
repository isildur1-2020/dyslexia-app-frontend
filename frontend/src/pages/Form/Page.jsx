import React from "react";
import PropTypes from "prop-types";
import { Layout } from "../../components/Layout/Layout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import Input from "@mui/material/Input";
import { InputLabel } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const Page = ({ state, handleSubmit, handleChange, isCompleted }) => {
  const {
    name,
    age,
    dateOfBirth,
    nationality,
    bloodType,
    gender,
    currentLanguaje,
  } = state;
  return (
    <Layout title="Complete the form">
      <Box mt={6}>
        <div className={styles.Form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.Form__container}>
              <Box mb={2}>
                <InputLabel htmlFor="user-name">
                  {currentLanguaje?.name}
                </InputLabel>
                <Input
                  fullWidth
                  id="user-name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="user-age">
                  {currentLanguaje?.age}
                </InputLabel>
                <Input
                  fullWidth
                  id="user-age"
                  name="age"
                  type="number"
                  value={age}
                  onChange={handleChange}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="user-birth">
                  {currentLanguaje?.birthday}
                </InputLabel>
                <Input
                  fullWidth
                  type="date"
                  id="user-birth"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={handleChange}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="user-nationality">
                  {currentLanguaje?.nationality}
                </InputLabel>
                <Input
                  fullWidth
                  id="user-nationality"
                  name="nationality"
                  value={nationality}
                  onChange={handleChange}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="user-bloodType">
                  {currentLanguaje?.bloodType}
                </InputLabel>
                <Input
                  fullWidth
                  id="user-bloodType"
                  name="bloodType"
                  value={bloodType}
                  onChange={handleChange}
                />
              </Box>
              <FormControl>
                <RadioGroup
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                  aria-labelledby="gender-radio-buttons"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label={currentLanguaje?.female}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label={currentLanguaje?.male}
                  />
                </RadioGroup>
              </FormControl>

              <Box mt={6}>
                <Button
                  disabled={!isCompleted}
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                >
                  {currentLanguaje?.submit}
                </Button>
              </Box>
            </div>
          </form>
        </div>
      </Box>
    </Layout>
  );
};

Page.propTypes = {
  state: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  isCompleted: PropTypes.bool,
};
