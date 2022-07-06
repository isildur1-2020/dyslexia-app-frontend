import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSetCurrentPage = (state, setState) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pathname[1];
    setState({
      ...state,
      currentQuestion: Number(page),
    });
  }, []);

  return null;
};
