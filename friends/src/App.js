import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import FriendsList from "./components/FriendsList";

const App = props => {
  const [friendsList, updateFriendsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => updateFriendsList(res.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="App">
      <FriendsList friendslist={friendsList} />
    </div>
  );
};

export default App;
