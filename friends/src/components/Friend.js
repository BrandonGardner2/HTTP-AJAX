import React from "react";
import { Link } from "react-router-dom";

const Friend = props => {
  const { name, age, email, id } = props.friend;
  const { removeFriendFromDB } = props;

  const removeFriend = () => {
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
      <Link
        to={{
          pathname: `/friend/${id}`,
          state: { friend: props.friend }
        }}
      >
        Update Friend
      </Link>
    </div>
  );
};

export default Friend;
