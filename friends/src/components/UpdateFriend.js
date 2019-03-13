import React, { useRef, useEffect } from "react";
import axios from "axios";

const UpdateFriend = props => {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(res => {
        const friend = res.data;
        nameRef.current.value = friend.name;
        ageRef.current.value = friend.age;
        emailRef.current.value = friend.email;
      })
      .catch(e => {
        nameRef.current.value = passedFriend.name;
        ageRef.current.value = passedFriend.age;
        emailRef.current.value = passedFriend.email;
      });
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
    <form className="friend-form" onSubmit={handleSubmit}>
      <input placeholder="Friend Name" ref={nameRef} />
      <input placeholder="Friend Age" ref={ageRef} type="number" />
      <input placeholder="Friend email" ref={emailRef} />
      <button>Update Friend</button>
    </form>
  );
};

export default UpdateFriend;
