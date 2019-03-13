import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationComponent = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  width: 100%;
`;

const NavLinkBtn = styled(NavLink)`
  align-items: center;
  background: #99aabd;
  border-radius: 10px;
  color: #393638;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0 15px;
  text-decoration: none;
  width: 100px;

  &.active {
    color: #5384a1;
    background: white;
    border: 1px solid black;
  }

  &:hover {
    color: white;
    background: #5384a1;
  }
`;

const Navigation = props => {
  return (
    <NavigationComponent>
      <NavLinkBtn exact to="/">
        Home
      </NavLinkBtn>
      <NavLinkBtn to="/addfriend">Add Friend</NavLinkBtn>
    </NavigationComponent>
  );
};

export default Navigation;
