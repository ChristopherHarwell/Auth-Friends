import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendsList() {
  const [state, setState] = useState({ friends: [] });

  useEffect(() => getData(), []);

  function getData() {
    axiosWithAuth()
      .get("/friends")
      .then((response) => {
        console.log(response.data);
        setState({ friends: response.data });
        
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  }

  console.log("FriendsList:", state.friends);
  return (
    <>
      {state.friends.map((friend) => (
        <p>{friend.name}</p>
      ))}
    </>
  );
}

export default FriendsList;
