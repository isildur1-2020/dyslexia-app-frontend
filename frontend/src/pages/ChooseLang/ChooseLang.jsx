import React, { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";
import { useIsMounted } from "../../hooks/useIsMounted";
import { useForm } from "../../hooks/useForm";
import { languajes } from "../../languajes/languajes";
import { langsToUpper } from "../../adapters/languajes";
import { Page } from "./Page";

export const ChooseLang = () => {
  const { isMounted } = useIsMounted();
  const [langs, setLangs] = useState([]);
  const navigate = useNavigate();
  const { state, setState } = useContext(MainContext);
  const { handleChange } = useForm(state, setState);

  const adapterLangs = useCallback(() => {
    const newLangs = langsToUpper(languajes);
    if (isMounted) setLangs(newLangs);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = () => {
    const { languaje } = state;
    if (languaje === 0 || languaje === "") return;
    const langKey = languaje.toLowerCase();
    setState({
      ...state,
      currentLanguaje: languajes[langKey],
    });
    navigate("/login");
  };

  useEffect(() => {
    adapterLangs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Page
      languajes={langs}
      state={state}
      setState={setState}
      navigate={navigate}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
};
