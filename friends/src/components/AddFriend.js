import React, { useRef } from "react";

const AddFriend = props => {
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const addFriendToDB = props.addFriendToDB;

  const handleSubmit = e => {
    e.preventDefault();
    if (nameRef && ageRef && emailRef) {
      addFriendToDB(
        nameRef.current.value,
        Number(ageRef.current.value),
        emailRef.current.value
      )
        .then(res => props.history.push("/"))
        .catch(e => alert("Something went wrong..."));
    } else {
      alert("Please fill out all of the fields!");
    }
  };

  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <input placeholder="Friend Name" ref={nameRef} />
      <input placeholder="Friend Age" ref={ageRef} />
      <input placeholder="Friend email" ref={emailRef} />
      <button>Add Friend!</button>
    </form>
  );
};

export default AddFriend;
