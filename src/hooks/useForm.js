import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setvValues] = useState(initialState);
  const handleInputChange = ({ target }) => {
    setvValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange];
};

export default useForm;
