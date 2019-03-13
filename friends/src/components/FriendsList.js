import React from "react";

import Friend from "./Friend";

const FriendsList = props => {
  const { friendslist } = props;
  const { removeFriendFromDB } = props;

  if (!friendslist) {
    return <h2>Loading your friends list...</h2>;
  }
  return (
    <div className="friends-list">
      {friendslist.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          removeFriendFromDB={removeFriendFromDB}
        />
      ))}
    </div>
  );
};

export default FriendsList;
