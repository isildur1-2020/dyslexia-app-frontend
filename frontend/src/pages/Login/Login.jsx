import axios from "axios";
import { BACK_URL } from "../../config";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { MainContext } from "../../contexts/MainContext";
import { headers } from "../../utils/headers";
import { Page } from "./Page";

export const Login = () => {
  const navigate = useNavigate();
  const { state, setState } = useContext(MainContext);
  const config = { slice: true, start: 2, end: 3 };
  const { handleChange, isCompleted } = useForm(state, setState, config);

  useEffect(() => {
    const { isAdminAuth } = state;
    if (isAdminAuth) navigate("/form");
  }, []);

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { username, password } = state;
      if (!username || !password) return;
      const { data } = await axios.post(
        BACK_URL + "/login",
        {
          email: username,
          password,
        },
        {
          headers,
        }
      );
      const { error, isAuth } = data;
      if (error) {
        setState({
          ...state,
          username: "",
          password: "",
        });
      } else {
        setState({
          ...state,
          isAdminAuth: true,
        });
        navigate("/form");
      }
    } catch (err) {
      console.log(err);
    }
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
