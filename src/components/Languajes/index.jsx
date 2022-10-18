import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguajes } from "../../services/languajeService";
import {
  setLanguaje,
  setCurrentLanguaje,
  setDataLanguajes,
  setLanguajeOptions,
} from "../../redux/actions/main";
import { Page } from "./page";

export const Languajes = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s?.mainState);
  const { languajeOptions, languaje, reloadLanguajes } = state;

  // redux actions
  const handleLanguajeChange = ({ target }) => {
    const { dataLanguajes } = state;
    dispatch(setLanguaje(target.value));
    dispatch(setCurrentLanguaje(dataLanguajes?.[target.value]));
  };

  // To search languaje options
  useEffect(() => {
    const getLanguajeOptions = async () => {
      const { languajeOptions } = await getLanguajes();
      dispatch(setDataLanguajes(languajeOptions));
      const languajes = Object.keys(languajeOptions);
      dispatch(setLanguajeOptions(languajes));
    };

    getLanguajeOptions();
  }, [reloadLanguajes]);

  return (
    <Page
      name="languaje"
      value={languaje}
      languajes={languajeOptions}
      handleChange={handleLanguajeChange}
    />
  );
};
