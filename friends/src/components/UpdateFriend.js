import React, { useRef, useEffect } from "react";

import { Btn } from "./Friend";
import { Form, Input } from "./AddFriend";

const UpdateFriend = props => {
  useEffect(() => {
    nameRef.current.value = passedFriend.name;
    ageRef.current.value = passedFriend.age;
    emailRef.current.value = passedFriend.email;
  }, []);

  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const { id } = props.match.params;
  const passedFriend = props.location.state.friend;
  const updateFriendToDB = props.updateFriendToDB;

  const handleSubmit = e => {
    e.preventDefault();
    const nameRefValue = nameRef.current.value;
    const ageRefValue = ageRef.current.value;
    const emailRefValue = emailRef.current.value;

    if (nameRefValue && ageRefValue !== 0 && emailRefValue) {
      updateFriendToDB({
        id,
        name: nameRefValue,
        age: Number(ageRefValue),
        email: emailRefValue
      })
        .then(res => props.history.push("/"))
        .catch(e => alert("Something went wrong..."));
    } else {
      alert("Please fill out all of the fields");
    }
  };

  return (
    <Form className="friend-form" onSubmit={handleSubmit}>
      <Input placeholder="Friend Name" ref={nameRef} />
      <Input placeholder="Friend Age" ref={ageRef} type="number" />
      <Input placeholder="Friend email" ref={emailRef} />
      <Btn>Update Friend</Btn>
    </Form>
  );
};

export default UpdateFriend;
