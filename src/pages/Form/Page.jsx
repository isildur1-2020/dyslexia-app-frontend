import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Layout } from "../../components/Layout/Layout";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Page = ({
  mainState,
  formState,
  isCompleted,
  handleSubmit,
  handleChange,
}) => {
  const { currentLanguaje } = mainState;
  const { name, age, dateOfBirth, nationality, bloodType, gender } = formState;
  return (
    <Layout title="Complete the form">
      <Box mt={8}>
        <div className={styles.Form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.Form__container}>
              <Box mb={2}>
                <InputLabel htmlFor="user-name">
                  {currentLanguaje?.name}
                </InputLabel>
                <Input
                  fullWidth
                  name="name"
                  value={name}
                  id="user-name"
                  onChange={handleChange}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="user-age">
                  {currentLanguaje?.age}
                </InputLabel>
                <Input
                  fullWidth
                  name="age"
                  value={age}
                  id="user-age"
                  type="number"
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
                  name="nationality"
                  id="user-nationality"
                  value={nationality}
                  onChange={handleChange}
                />
              </Box>
              <Box mb={2}>
                <InputLabel htmlFor="user-bloodType">
                  {currentLanguaje?.bloodType}
                </InputLabel>
                <Select
                  displayEmpty
                  name="bloodType"
                  value={bloodType}
                  variant="standard"
                  sx={{ width: 300 }}
                  id="user-bloodType"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                </Select>
              </Box>
              <FormControl>
                <RadioGroup
                  row
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

              <Box mt={3}>
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="outlined"
                  // disabled={!isCompleted}
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
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  mainState: PropTypes.shape({
    currentLanguaje: PropTypes.object,
  }).isRequired,
  formState: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    bloodType: PropTypes.string,
    dateOfBirth: PropTypes.string,
    nationality: PropTypes.string,
  }).isRequired,
};
