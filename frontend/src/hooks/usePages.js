import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

export const usePages = () => {
  const location = useLocation();
  const [isPrevPage, setIsPrevPage] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const { state } = useContext(MainContext);
  const { questions } = state;

  useEffect(() => {
    const currentPage = Number(location.pathname[1]);
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
  };
};
