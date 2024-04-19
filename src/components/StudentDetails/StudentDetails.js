// StudentDetails.js
import React, { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentProvider";
import StudentForm from "../StudentForm/StudentForm";

const StudentDetails = (props) => {
  const ctx = useContext(StudentContext);
  const students = ctx.students;
  const [editStudentId, setEditStudentId] = useState(null);

  const handleEditClick = (studentId) => {
    setEditStudentId(studentId);
  };

  return (
    <>
      <h1>All Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <p>Mobile: {student.mobile}</p>
            <p>Address: {student.address}</p>
            <button onClick={() => ctx.removeStudent(student.id)}>
              Delete
            </button>
            <button onClick={() => handleEditClick(student.id)}>Edit</button>
          </li>
        ))}
      </ul>
      {editStudentId && (
        <StudentForm
          editStudentId={editStudentId}
          onClose={() => setEditStudentId(null)}
        />
      )}
    </>
  );
};

export default StudentDetails;
