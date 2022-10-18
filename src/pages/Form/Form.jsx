import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserForm } from "../../redux/actions/userForm";
import { useIsMounted } from "../../hooks/useIsMounted";
import { Page } from "./Page";

export const Form = () => {
  const isMounted = useIsMounted();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);
  const mainState = useSelector((s) => s?.mainState);
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
    navigate("/time");
  };

  // TO ENABLE OR DISABLE SUBMIT BUTTON
  useEffect(() => {
    const values = Object.values(formState);
    const isFailed = values.some((el) => el === "");
    !isFailed && isMounted ? setIsCompleted(true) : setIsCompleted(false);
  }, [formState]);

  // ALWAYS CLEAR FORM
  useEffect(() => {
    dispatch(
      setUserForm({
        age: "",
        name: "",
        gender: "",
        bloodType: "",
        dateOfBirth: "",
        nationality: "",
      })
    );
  }, []);

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
