import React, { useContext, useState } from "react";
import AddStudent from "./components/AddStudent/AddStudent";
import StudentForm from "./components/StudentForm/StudentForm";
import StudentProvider from "./components/contexts/StudentProvider";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import FormProvider from "./components/contexts/FormProvider";
import FormContext from "./components/contexts/form-context";

const App = () => {
  // const ctx = useContext(FormContext);
  const [isAdding, setIsAdding] = useState(false); // Initialize isAdding as false

  const onAddStudentsHandler = (data) => {
    setIsAdding(data);
    // Update isAdding based on the received dataa
    // console.log(ctx.formOpen);
    // ctx.openForm(data);
  };

  const onCloseHandler = () => {
    setIsAdding(false);
  };

  return (
    <StudentProvider>
      <FormProvider>
        <AddStudent onAddStudents={onAddStudentsHandler} />
        {isAdding && <StudentForm onClose={onCloseHandler} />}{" "}
        {/* Pass onClose handler */}
        <StudentDetails />
      </FormProvider>
    </StudentProvider>
  );
};

export default App;
