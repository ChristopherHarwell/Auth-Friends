import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendsList() {
  const state = useState({ friends: [] });

  useEffect(() => getData(), []);

  function getData() {
    axiosWithAuth()
      .get("/friends")
      .then((response) => {
          return [{...state, friends: response.data.friends}]    
    })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  }
  return (
    <>
      {state.friends.map((friend) => (
        <div>
          <p>{friend.name}</p>
        </div>
      ))}
    </>
  );
}

export default FriendsList;
