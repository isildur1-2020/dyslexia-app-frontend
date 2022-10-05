import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLanguaje } from "../redux/actions/main";
import { languajes } from "../languajes/languajes";

export const DefaultLanguaje = memo(({ children }) => {
  const dispatch = useDispatch();
  const mainState = useSelector((s) => s?.formReducer);
  useEffect(() => {
    const { languaje } = mainState;
    if (languaje === "") {
      const lang = languajes["english"];
      dispatch(setCurrentLanguaje(lang));
    }
  }, []);
  return children;
});
