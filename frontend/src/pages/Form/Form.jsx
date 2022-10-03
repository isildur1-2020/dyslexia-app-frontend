import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserForm } from "../../redux/actions/userForm";
import { useIsMounted } from "../../hooks/useIsMounted";
import { Page } from "./Page";

export const Form = () => {
  const isMounted = useIsMounted();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);
  const mainState = useSelector((s) => s?.formReducer);
  const formState = useSelector((s) => s?.userForm);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    dispatch(
      setUserForm({
        ...formState,
        [name]: value,
      })
    );
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!isCompleted) return;
    dispatch(
      setUserForm({
        name: "",
        age: "",
        dateOfBirth: "",
        nationality: "",
        bloodType: "",
        gender: "",
      })
    );
    navigate("/logo");
  };

  // to enable or disable submit button
  useEffect(() => {
    const values = Object.values(formState);
    const isFailed = values.some((el) => el === "");
    !isFailed && isMounted ? setIsCompleted(true) : setIsCompleted(false);
  }, [formState]);

  return (
    <Page
      mainState={mainState}
      formState={formState}
      isCompleted={isCompleted}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};
