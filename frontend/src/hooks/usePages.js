import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePages = () => {
  const location = useLocation();
  const currentPage = Number(location?.pathname?.[1]);
  const [isPrevPage, setIsPrevPage] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const mainState = useSelector((s) => s?.mainState);
  const { questions } = mainState;

  useEffect(() => {
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    const isExistPrevPage = questions.indexOf(prevPage);
    const isExistNextPage = questions.indexOf(nextPage);
    isExistPrevPage === -1 ? setIsPrevPage(false) : setIsPrevPage(true);
    isExistNextPage === -1 ? setIsNextPage(false) : setIsNextPage(true);
  }, [questions]);

  return {
    isPrevPage,
    isNextPage,
    currentPage,
  };
};
