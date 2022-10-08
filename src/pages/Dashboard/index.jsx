import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsername } from "../../utils/jwt";
import { setIsAuth } from "../../redux/actions/user";
import { createClient } from "../../services/adminService";
import { Page } from "./page";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
    tests: 0,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { username, password } = state;
      if (!username || !password) return;
      const data = {
        ...state,
        group_id: getUsername(),
      };
      const { err, message } = await createClient(data);
      alert(message);
    } catch (err) {
      console.log(err);
    } finally {
      setState({
        username: "",
        password: "",
        tests: 0,
      });
      setReload((s) => !s);
    }
  };

  const handleBackClick = () => {
    localStorage.clear();
    dispatch(setIsAuth(false));
    navigate("/login");
  };

  return (
    <Page
      state={state}
      reload={reload}
      setReload={setReload}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleBackClick={handleBackClick}
    />
  );
};
