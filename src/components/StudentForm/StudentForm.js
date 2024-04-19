import React, { useContext, useRef, useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { StudentContext } from "../contexts/StudentProvider";

const StudentForm = (props) => {
  const ctx = useContext(StudentContext);

  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const addressRef = useRef(null);

  // State variables to hold the current values for editing
  const [editName, setEditName] = useState("");
  const [editMobile, setEditMobile] = useState("");
  const [editAddress, setEditAddress] = useState("");

  useEffect(() => {
    // If editStudentId is provided (indicating editing mode), set initial values
    if (props.editStudentId) {
      const studentToEdit = ctx.students.find(
        (student) => student.id === props.editStudentId
      );
      if (studentToEdit) {
        setEditName(studentToEdit.name);
        setEditMobile(studentToEdit.mobile);
        setEditAddress(studentToEdit.address);
      }
    }
  }, [props.editStudentId, ctx.students]);

  const addHandler = (e) => {
    e.preventDefault();
    ctx.addStudent({
      id: Math.random(),
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      address: addressRef.current.value,
    });
  };

  const editHandler = (e) => {
    e.preventDefault();
    ctx.editStudent(props.editStudentId, {
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      address: addressRef.current.value,
    });
    props.onClose(); // Close the form after editing
  };

  const closeHandler = (e) => {
    e.preventDefault();
    props.onClose(); // Call the onClose function passed via props
  };

  return (
    <Modal>
      <form>
        <label>Name:</label>
        <input type="text" ref={nameRef} defaultValue={editName} />
        <br />
        <label>Mobile:</label>
        <input type="number" ref={mobileRef} defaultValue={editMobile} />
        <label>Address:</label>
        <input type="text" ref={addressRef} defaultValue={editAddress} />

        <div>
          {props.editStudentId ? (
            <button onClick={editHandler}>Update</button>
          ) : (
            <button onClick={addHandler}>Add</button>
          )}
          <button onClick={closeHandler}>Close</button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentForm;
