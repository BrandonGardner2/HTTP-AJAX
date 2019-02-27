import React from "react";

const Friend = props => {
  const { name, age, email, id } = props.friend;
  const { removeFriendFromDB } = props;
  const removeFriend = e => {
    e.preventDefault();
    removeFriendFromDB(id);
  };
  if (!props.friend) {
    return <h2>Loading your friend...</h2>;
  }
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <button onClick={removeFriend}>Remove Friend</button>
    </div>
  );
};

export default Friend;
