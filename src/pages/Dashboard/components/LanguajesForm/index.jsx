import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useForm } from "../../../../hooks/useForm";
import { reloadLanguajes } from "../../../../redux/actions/main";
import { updateLanguaje } from "../../../../services/languajeService";
import { Page } from "./page";

export const LanguajesForm = () => {
  const dispatch = useDispatch();
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
  });
  const { handleChange } = useForm(state, setState);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const resp = await updateLanguaje(languaje, state);
    dispatch(reloadLanguajes());
    alert(resp?.message);
  };

  // TO CHANGE CURRENT LANGUAJE INFO
  useEffect(() => {
    setState(currentLanguaje);
  }, [languaje]);

  return (
    <Page
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
