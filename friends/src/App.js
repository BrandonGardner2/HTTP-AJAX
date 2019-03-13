import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Navigation from "./components/Navigation";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import UpdateFriend from "./components/UpdateFriend";

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

  const updateFriendToDB = friend => {
    return axios
      .put(`http://localhost:5000/friends/${friend.id}`, {
        name: friend.name,
        age: friend.age,
        email: friend.email
      })
      .then(res => {
        fetchFriends();
      })
      .catch(e => console.log(e));
  };

  const removeFriendFromDB = id => {
    return axios
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
      <Navigation />

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
      <Route
        path="/friend/:id"
        render={props => (
          <UpdateFriend {...props} updateFriendToDB={updateFriendToDB} />
        )}
      />
    </div>
  );
};

export default App;
