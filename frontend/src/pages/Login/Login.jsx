import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { MainContext } from "../../contexts/MainContext";
import { Page } from "./Page";

export const Login = () => {
  const navigate = useNavigate();
  const { state, setState } = useContext(MainContext);
  const config = { slice: true, start: 2, end: 3 };
  const { handleChange, isCompleted } = useForm(state, setState, config);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = state;
    if (!username || !password) return;
    navigate("/form");
  };

  const handleShowPassword = () =>
    setState((state) => {
      const { showPassword } = state;
      return {
        ...state,
        showPassword: !showPassword,
      };
    });

  return (
    <Page
      handleSubmit={handleSubmit}
      state={state}
      isCompleted={isCompleted}
      handleShowPassword={handleShowPassword}
      handleChange={handleChange}
    />
  );
};
