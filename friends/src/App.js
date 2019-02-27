import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";

import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

const App = props => {
  const [friendsList, updateFriendsList] = useState([]);
  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => updateFriendsList(res.data))
      .catch(e => console.log(e));
  };

  const addFriendToDB = (name, age, email) => {
    return axios
      .post("http://localhost:5000/friends", {
        name,
        age,
        email
      })
      .then(res => {
        fetchFriends();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateFriendToDB = friend => {};

  const removeFriendFromDB = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        fetchFriends();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/addfriend">Add Friend</NavLink>
      <Route
        exact
        path="/"
        render={props => (
          <FriendsList
            {...props}
            friendslist={friendsList}
            removeFriendFromDB={removeFriendFromDB}
          />
        )}
      />
      <Route
        path="/addfriend"
        render={props => <AddFriend {...props} addFriendToDB={addFriendToDB} />}
      />
    </div>
  );
};

export default App;
