import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";
import { QuestionList } from "../components/QuestionList/QuestionList";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const SeventhPage = () => {
  const navigate = useNavigate();
  const { state } = useContext(MainContext);
  const { currentLanguaje } = state;
  const { title6, list6, borderColor } = currentLanguaje;
  return (
    <>
      <QuestionList
        clockID={7}
        list={list6}
        title={title6}
        borderColor={borderColor}
        backgroundColor="#FF1C20"
        fontSize="body1"
        textStyle={{
          fontWeight: 300,
          fontSize: 24,
        }}
      />
      <Box
        mt={-2}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => navigate("/sendData")}
          variant="contained"
          size="large"
        >
          Finish
        </Button>
      </Box>
    </>
  );
};
