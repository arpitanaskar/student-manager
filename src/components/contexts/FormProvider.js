import React, { createContext, useState, useContext } from "react";

const FormContext = createContext({});

const FormProvider = (props) => {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const value = {
    formOpen: formOpen,
    openForm: openForm,
    closeForm: closeForm,
  };

  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  );
};

export default FormProvider;
export { FormContext };
