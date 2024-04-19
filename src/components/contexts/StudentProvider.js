import { createContext, useState } from "react";

const StudentContext = createContext({
  students: [],
  addStudent: () => {},
  editStudent: () => {},
  removeStudent: () => {},
  total: 0,
});

const StudentProvider = (props) => {
  const [students, setStudents] = useState([]);

  // Function to add a student
  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
    console.log(students);
  };

  // Function to edit a student
  const editStudent = (id, updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, ...updatedStudent } : student
      )
    );
  };

  // Function to remove a student
  const removeStudent = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  const total = students.length;

  const studentContextValue = {
    students,
    addStudent,
    editStudent,
    removeStudent,
    total,
  };

  return (
    <StudentContext.Provider value={studentContextValue}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
export { StudentContext };
