import { useEffect, useState } from "react";

export const useForm = (state, setState, config = {}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { slice, start, end } = config;

  useEffect(() => {
    let values = Object.values(state);
    if (slice) values = values.slice(start, end + 1);
    const correct = values.every((el) => el);
    correct ? setIsCompleted(true) : setIsCompleted(false);
  }, [state]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return { handleChange, isCompleted };
};
