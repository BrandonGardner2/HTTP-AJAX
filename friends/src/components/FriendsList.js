import React from "react";
import styled from "styled-components";

import Friend from "./Friend";

const FriendsListComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2%;
`;

const FriendsList = props => {
  const { friendslist } = props;
  const { removeFriendFromDB } = props;

  if (!friendslist) {
    return <h2>Loading your friends list...</h2>;
  }
  return (
    <FriendsListComponent>
      {friendslist.map(friend => (
        <Friend
          key={friend.id}
          friend={friend}
          removeFriendFromDB={removeFriendFromDB}
        />
      ))}
    </FriendsListComponent>
  );
};

export default FriendsList;
