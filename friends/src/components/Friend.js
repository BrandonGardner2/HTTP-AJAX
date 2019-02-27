import React from "react";

const Friend = props => {
  const { name, age, email } = props.friend;
  if (!props.friend) {
    return <h2>Loading your friend...</h2>;
  }
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
