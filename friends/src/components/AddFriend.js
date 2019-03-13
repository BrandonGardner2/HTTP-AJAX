import React, { useRef } from "react";
import styled from "styled-components";

import { Btn } from "./Friend";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3%;
  background: white;
  min-width: 60%;
  margin: 0 auto;
  border-radius: 5px;
`;

export const Input = styled.input`
  display: flex;
  height: 15px;
  align-items: center;
  padding-left: 1%;
  margin-bottom: 8px;
  width: 70%;
`;

const AddFriend = props => {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const addFriendToDB = props.addFriendToDB;

  const handleSubmit = e => {
    e.preventDefault();
    const nameRefValue = nameRef.current.value;
    const ageRefValue = ageRef.current.value;
    const emailRefValue = emailRef.current.value;

    if (nameRefValue && ageRefValue !== 0 && emailRefValue) {
      addFriendToDB(nameRefValue, Number(ageRefValue), emailRefValue)
        .then(res => props.history.push("/"))
        .catch(e => alert("Something went wrong..."));
    } else {
      alert("Please fill out all of the fields!");
    }
  };

  return (
    <Form className="add-friend-form" onSubmit={handleSubmit}>
      <Input placeholder="Friend Name" ref={nameRef} />
      <Input placeholder="Friend Age" ref={ageRef} type="number" />
      <Input placeholder="Friend email" ref={emailRef} />
      <Btn>Add Friend!</Btn>
    </Form>
  );
};

export default AddFriend;
