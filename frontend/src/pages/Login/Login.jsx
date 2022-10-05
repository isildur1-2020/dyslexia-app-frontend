import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useIsMounted } from "../../hooks/useIsMounted";
import { setIsAuth } from "../../redux/actions/main";
import { BACK_URL } from "../../axios/axiosInstance";
import { Page } from "./Page";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { handleChange } = useForm(form, setForm);
  const state = useSelector((s) => s?.formReducer);
  const [showPassword, setShowPassword] = useState(false);

  // handle show password text
  const handleShowPassword = () =>
    isMounted ? setShowPassword(!showPassword) : null;

  // handle submit form
  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { username, password } = form;
      // if (username === "" || password === "") return;
      // change this
      navigate("/form");
      const data = {
        username,
        password,
      };
      const { data: resp } = await axios.post(`${BACK_URL}/login`, data);
      const { err, message, isAuth } = resp;
      if (err) return console.log(message);
      dispatch(setIsAuth(isAuth));
      navigate("/form");
    } catch (err) {
      console.log(err);
    } finally {
      setForm({
        username: "",
        password: "",
      });
    }
  };

  return (
    <Page
      form={form}
      state={state}
      showPassword={showPassword}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleShowPassword={handleShowPassword}
    />
  );
};
