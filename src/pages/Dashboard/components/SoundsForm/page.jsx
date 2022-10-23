import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from "@mui/icons-material/Save";
import Typography from "@mui/material/Typography";
import UploadIcon from "@mui/icons-material/Upload";
import { Languajes } from "../../../../components/Languajes";

export const Page = ({
  state,
  audios,
  existsFile,
  handleChange,
  handleSubmit,
  handleUploadFile,
  handleFileChange,
}) => {
  const AudioOption = ({ title, name, value }) => (
    <Box>
      <Typography variant="h5" component="p">
        {title}
      </Typography>
      <Box my={2} width={300} display="flex" columnGap={1}>
        <Select
          required
          fullWidth
          name={name}
          size="small"
          displayEmpty
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {audios &&
            audios.map((audio) => (
              <MenuItem key={audio} value={audio}>
                {audio}
              </MenuItem>
            ))}
        </Select>
      </Box>
    </Box>
  );

  return (
    <Box px={4}>
      <form onSubmit={handleSubmit}>
        <Box
          mb={2}
          display="flex"
          alignItems="center"
          sx={{
            padding: "16px 32px",
            border: "1px dashed black",
          }}
        >
          <Typography mb={2} variant="h2" component="p">
            Audio configuration
          </Typography>
          <Languajes />
        </Box>
        <Box mb={4}>
          {!existsFile ? (
            <Button
              fullWidth
              size="large"
              color="primary"
              component="label"
              variant="outlined"
              endIcon={<UploadIcon />}
            >
              Please, select an audio
              <input
                hidden
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
              />
            </Button>
          ) : (
            <Button
              fullWidth
              size="large"
              color="success"
              component="label"
              variant="outlined"
              endIcon={<SaveIcon />}
              onClick={handleUploadFile}
            >
              Save audio
            </Button>
          )}
        </Box>
        <Box display="flex" flexWrap="wrap" columnGap={2}>
          <AudioOption
            name="audioFirstQuestion"
            title="Audio first question"
            value={state?.audioFirstQuestion}
          />
          <AudioOption
            name="audioSecondQuestion"
            title="Audio second question"
            value={state?.audioSecondQuestion}
          />
          <AudioOption
            name="audioThridQuestion"
            title="Audio thrid question"
            value={state?.audioThridQuestion}
          />
          <AudioOption
            name="audioFourthQuestion"
            title="Audio fourth question"
            value={state?.audioFourthQuestion}
          />
          <AudioOption
            name="audioFifthQuestion"
            title="Audio fifth question"
            value={state?.audioFifthQuestion}
          />
          <AudioOption
            name="audioSixthQuestion"
            title="Audio sixth question"
            value={state?.audioSixthQuestion}
          />
          <AudioOption
            name="audioSeventhQuestion"
            title="Audio seventh question"
            value={state?.audioSeventhQuestion}
          />
        </Box>
        <Button type="submit" fullWidth variant="outlined" size="large">
          Guardar
        </Button>
      </form>
    </Box>
  );
};

Page.propTypes = {
  state: PropTypes.object,
  existsFile: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleUploadFile: PropTypes.func,
  handleFileChange: PropTypes.func,
  audios: PropTypes.arrayOf(PropTypes.string),
};
