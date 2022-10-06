import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePages = () => {
  const location = useLocation();
  const currentPage = Number(location?.pathname?.[1]);
  const [isNextPage, setIsNextPage] = useState(false);
  const { questions } = useSelector((s) => s?.mainState);

  useEffect(() => {
    const nextPage = currentPage + 1;
    const isExistNextPage = questions.indexOf(nextPage);
    isExistNextPage === -1 ? setIsNextPage(false) : setIsNextPage(true);
  }, [questions]);

  return {
    isNextPage,
    currentPage,
  };
};
