import React from "react";

const StudentContext = React.createContext({
  students: [],
  addStudent: (student) => {},
  editStudent: (id) => {},
  removeStudent: (id) => {},
  total: 0,
});

export default StudentContext;
