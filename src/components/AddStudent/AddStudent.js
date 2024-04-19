import { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentProvider";

const AddStudent = (props) => {
  const ctx = useContext(StudentContext);
  const [addStudent, setAddStudent] = useState(false);

  const addStudentHandler = () => {
    setAddStudent(!addStudent);
    props.onAddStudents(!addStudent); // Pass the toggled value of addStudent
  };

  return (
    <>
      <h1>Student Manager</h1>
      <p>All Students : {ctx.total}</p>
      <button onClick={addStudentHandler}>ADD NEW STUDENT</button>
    </>
  );
};

export default AddStudent;
