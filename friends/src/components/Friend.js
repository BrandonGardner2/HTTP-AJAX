import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FriendWrapper = styled.div`
  max-width: 400px;
  min-width: 250px;
  border: 1px solid black;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin: 0 10px 20px 10px;
  border-radius: 5px;
`;

const FriendHeader = styled.h3`
  margin: 0;
  text-decoration: underline;
  text-align: center;
`;

export const Btn = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  color: white;
  background: #393638;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background: #718ba0;
    border: 1px solid #718ba0;
  }
`;

const LinkBtn = styled(Link)`
  color: white;
  text-decoration: none;
`;

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
    <FriendWrapper>
      <div className="friend">
        <FriendHeader>{name}</FriendHeader>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <Btn onClick={removeFriend}>Remove Friend</Btn>
        <Btn>
          <LinkBtn
            to={{
              pathname: `/friend/${id}`,
              state: { friend: props.friend }
            }}
          >
            Update Friend
          </LinkBtn>
        </Btn>
      </div>
    </FriendWrapper>
  );
};

export default Friend;
