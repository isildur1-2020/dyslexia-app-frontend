import React, { useState } from "react";
import { jwtToString } from "../../utils/jwt";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useIsMounted } from "../../hooks/useIsMounted";
import { signinService } from "../../services/authService";
import { setIsAuth, setIsAdmin, setUsername } from "../../redux/actions/user";
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
  const state = useSelector((s) => s?.mainState);
  const [showPassword, setShowPassword] = useState(false);

  // handle show password text
  const handleShowPassword = () =>
    isMounted ? setShowPassword(!showPassword) : null;

  // handle submit form
  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { username, password } = form;
      if (username === "" || password === "") return;
      const data = {
        username,
        password,
      };
      const resp = await signinService(data);
      const { err, message, token } = resp;
      if (err) return console.log(message);
      const payload = jwtToString(token);
      dispatch(setIsAuth(true));
      dispatch(setIsAdmin(payload?.isAdmin));
      dispatch(setUsername(payload?.username));
      localStorage.setItem("token", token);
      localStorage.setItem("session", JSON.stringify(payload));
      payload?.isAdmin ? navigate("/dashboard") : navigate("/form");
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
