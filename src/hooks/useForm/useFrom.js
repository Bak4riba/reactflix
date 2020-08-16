import { useState } from 'react';
// O que salva no bd
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    handleChange, values, clearForm,
  };
}
export default useForm;
