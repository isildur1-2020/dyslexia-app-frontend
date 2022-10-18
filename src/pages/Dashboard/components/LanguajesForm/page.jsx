import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Languajes } from "../../../../components/Languajes";

export const Page = ({ state, handleChange, handleSubmit }) => (
  <Box px={4}>
    <form onSubmit={handleSubmit}>
      <Box
        mb={4}
        display="flex"
        alignItems="center"
        sx={{
          padding: "16px 32px",
          border: "1px dashed black",
        }}
      >
        <Typography mb={2} variant="h2" component="p">
          Languaje configuration
        </Typography>
        <Languajes />
      </Box>
      <Box>
        <Typography variant="h5" component="p">
          Login screen
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="loginTitle"
            label="title label"
            onChange={handleChange}
            value={state?.loginTitle}
          />
          <TextField
            required
            size="small"
            name="loginUser"
            label="user label"
            onChange={handleChange}
            value={state?.loginUser}
          />
          <TextField
            required
            size="small"
            name="loginPassword"
            label="password label"
            onChange={handleChange}
            value={state?.loginPassword}
          />
          <TextField
            required
            size="small"
            name="loginNext"
            label="next button label"
            onChange={handleChange}
            value={state?.loginNext}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Form screen
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="formName"
            label="form name"
            onChange={handleChange}
            value={state?.formName}
          />
          <TextField
            required
            size="small"
            name="formAge"
            label="form age"
            onChange={handleChange}
            value={state?.formAge}
          />
          <TextField
            required
            size="small"
            name="formDateOfBirth"
            label="form date of birth"
            onChange={handleChange}
            value={state?.formDateOfBirth}
          />
          <TextField
            required
            size="small"
            name="formNationality"
            label="form nationality"
            onChange={handleChange}
            value={state?.formNationality}
          />
          <TextField
            required
            size="small"
            name="formBloodType"
            label="form blood type"
            onChange={handleChange}
            value={state?.formBloodType}
          />
          <TextField
            required
            size="small"
            name="formFemale"
            label="form female label"
            onChange={handleChange}
            value={state?.formFemale}
          />
          <TextField
            required
            size="small"
            name="formMale"
            label="form male label"
            onChange={handleChange}
            value={state?.formMale}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Time screen
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="timeTitle"
            label="title label"
            onChange={handleChange}
            value={state?.timeTitle}
          />
          <TextField
            required
            size="small"
            name="timeMinutesLabel"
            label="time minutes label"
            onChange={handleChange}
            value={state?.timeMinutesLabel}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Record popup
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="recordPopupLabel"
            label="question label"
            onChange={handleChange}
            value={state?.recordPopupLabel}
          />
          <TextField
            required
            size="small"
            name="recordPopupCancelLabel"
            label="cancel label"
            onChange={handleChange}
            value={state?.recordPopupCancelLabel}
          />
          <TextField
            required
            size="small"
            name="recordPopupStartLabel"
            label="start label"
            onChange={handleChange}
            value={state?.recordPopupStartLabel}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          First Question
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="firstQuestionTitle"
            label="question title"
            onChange={handleChange}
            value={state?.firstQuestionTitle}
          />
          <TextField
            required
            size="small"
            name="firstQuestionSubtitle"
            label="question subtitle"
            onChange={handleChange}
            value={state?.firstQuestionSubtitle}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Second Question
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="secondQuestionTitle"
            label="question title"
            onChange={handleChange}
            value={state?.secondQuestionTitle}
          />
          <TextField
            required
            multiline
            maxRows={4}
            size="small"
            name="secondQuestionOption1"
            label="question option 1"
            onChange={handleChange}
            value={state?.secondQuestionOption1}
          />
          <TextField
            required
            multiline
            maxRows={4}
            size="small"
            name="secondQuestionOption2"
            label="question option 2"
            onChange={handleChange}
            value={state?.secondQuestionOption2}
          />
          <TextField
            required
            multiline
            maxRows={4}
            size="small"
            name="secondQuestionOption3"
            label="question option 3"
            onChange={handleChange}
            value={state?.secondQuestionOption3}
          />
          <TextField
            required
            multiline
            maxRows={4}
            size="small"
            name="secondQuestionOption4"
            label="question option 4"
            onChange={handleChange}
            value={state?.secondQuestionOption4}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Third Question
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="thirdQuestionTitle"
            label="question title"
            onChange={handleChange}
            value={state?.thirdQuestionTitle}
          />
          <TextField
            required
            size="small"
            name="thirdQuestionSubtitle"
            label="question subtitle"
            onChange={handleChange}
            value={state?.thirdQuestionSubtitle}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Fourth Question
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="fourthQuestionTitle"
            label="question title"
            onChange={handleChange}
            value={state?.fourthQuestionTitle}
          />
          <TextField
            required
            multiline
            maxRows={4}
            size="small"
            name="fourthQuestionOption1"
            label="question option 1"
            onChange={handleChange}
            value={state?.fourthQuestionOption1}
          />
          <TextField
            required
            multiline
            maxRows={4}
            size="small"
            name="fourthQuestionOption2"
            label="question option 2"
            onChange={handleChange}
            value={state?.fourthQuestionOption2}
          />
          <TextField
            required
            multiline
            maxRows={4}
            size="small"
            name="fourthQuestionOption3"
            label="question option 3"
            onChange={handleChange}
            value={state?.fourthQuestionOption3}
          />
          <TextField
            required
            multiline
            maxRows={4}
            size="small"
            name="fourthQuestionOption4"
            label="question option 4"
            onChange={handleChange}
            value={state?.fourthQuestionOption4}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Fifth Question
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="fifthQuestionTitle"
            label="question title"
            onChange={handleChange}
            value={state?.fifthQuestionTitle}
          />
          <TextField
            required
            size="small"
            name="fifthQuestionSubtitle"
            label="question subtitle"
            onChange={handleChange}
            value={state?.fifthQuestionSubtitle}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Sixth Question
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="sixthQuestionTitle"
            label="question title"
            onChange={handleChange}
            value={state?.sixthQuestionTitle}
          />
          <TextField
            required
            multiline
            maxRows={6}
            size="small"
            name="sixthQuestionText"
            label="question text"
            onChange={handleChange}
            value={state?.sixthQuestionText}
          />
        </Box>
      </Box>
      {/* ============================================================== */}
      <Box>
        <Typography variant="h5" component="p">
          Seventh Question
        </Typography>
        <Box my={2} display="flex" columnGap={1}>
          <TextField
            required
            size="small"
            name="seventhQuestionTitle"
            label="question title"
            onChange={handleChange}
            value={state?.seventhQuestionTitle}
          />
          <TextField
            required
            multiline
            maxRows={6}
            size="small"
            name="seventhQuestionText"
            label="question text"
            onChange={handleChange}
            value={state?.seventhQuestionText}
          />
        </Box>
      </Box>
      <Button type="submit" fullWidth variant="outlined" size="large">
        Guardar
      </Button>
    </form>
  </Box>
);
