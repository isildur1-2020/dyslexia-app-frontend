export const useForm = (state, setState) => {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return { handleChange };
};
