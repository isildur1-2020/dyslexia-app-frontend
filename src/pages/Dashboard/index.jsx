import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { setIsAuth } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { reloadLanguajes } from "../../redux/actions/main";
import { updateLanguaje } from "../../services/languajeService";
import { Page } from "./page";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const mainState = useSelector((s) => s?.mainState);
  const { languaje, currentLanguaje } = mainState;

  const [state, setState] = useState({
    loginTitle: "",
    loginUser: "",
    loginPassword: "",
    loginNext: "",
    // ========================
    formName: "",
    formAge: "",
    formDateOfBirth: "",
    formNationality: "",
    formBloodType: "",
    formFemale: "",
    formMale: "",
    // ========================
    timeTitle: "",
    timeMinutesLabel: "",
    // ========================
    recordPopupLabel: "",
    recordPopupCancelLabel: "",
    recordPopupStartLabel: "",
    // ========================
    firstQuestionTitle: "",
    firstQuestionSubtitle: "",
    // ========================
    secondQuestionTitle: "",
    secondQuestionOption1: "",
    secondQuestionOption2: "",
    secondQuestionOption3: "",
    secondQuestionOption4: "",
    // ========================
    thirdQuestionTitle: "",
    thirdQuestionSubtitle: "",
    // ========================
    fourthQuestionTitle: "",
    fourthQuestionOption1: "",
    fourthQuestionOption2: "",
    fourthQuestionOption3: "",
    fourthQuestionOption4: "",
    // ========================
    fifthQuestionTitle: "",
    fifthQuestionSubtitle: "",
    // ========================
    sixthQuestionTitle: "",
    sixthQuestionText: "",
    // ========================
    seventhQuestionTitle: "",
    seventhQuestionText: "",
    // ========================
    audioFirstQuestion: "",
    audioSecondQuestion: "",
    audioThridQuestion: "",
    audioFourthQuestion: "",
    audioFifthQuestion: "",
    audioSixthQuestion: "",
    audioSeventhQuestion: "",
  });

  const { handleChange } = useForm(state, setState);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const resp = await updateLanguaje(languaje, state);
    dispatch(reloadLanguajes());
    alert(resp?.message);
  };

  // ===============================
  // TO LOGOUT
  const handleBackClick = () => {
    localStorage.clear();
    dispatch(setIsAuth(false));
    navigate("/login");
  };

  // ===============================
  // TO CHANGE CURRENT LANGUAJE INFO
  useEffect(() => {
    setState(currentLanguaje);
  }, [languaje]);

  return (
    <Page
      state={state}
      reload={reload}
      setReload={setReload}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleBackClick={handleBackClick}
    />
  );
};
