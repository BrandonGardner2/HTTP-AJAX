import React, { useRef } from "react";

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
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <input placeholder="Friend Name" ref={nameRef} />
      <input placeholder="Friend Age" ref={ageRef} type="number" />
      <input placeholder="Friend email" ref={emailRef} />
      <button>Add Friend!</button>
    </form>
  );
};

export default AddFriend;
