import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsForm from "./FriendsForm";
import AddFriends from "./AddFriends";

function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [newData, setNewData] = useState({});
  const [id, setId] = useState("");
  const [friend, setFriend] = useState({
    newFriend: {
      id: "",
      name: "",
      age: "",
      email: "",
    },
    value: "",
  });

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        if (res.data !== friends) {
          setFriends(res.data);
        }
      })
      .catch((errorMessage) => {
        console.error("Error: ", errorMessage);
      });
  }, [newData]);

  function handleFriendForm(event) {
    setFriend({
      newFriend: {
        ...friend.newFriend,
        [event.target.name]: event.target.value,
      },
    });
  }

  function handleAddFriend(event) {
    event.preventDefault();

    setFriend({
      value: "",
    });
    const friendIds = friends.map((friend) => {
      return friend.id;
    });

    axiosWithAuth()
      .post("/friends", friend.newFriend)

      .then((res) => {
        setNewData(res.data);
      })
      .catch((err) => {
        console.log("there was an error: ", err);
      });
  }

  console.log("FriendsList:", friends);
  return (
    <>
      <FriendsForm
        handleAddFriend={handleAddFriend}
        handleFriendForm={handleFriendForm}
        value={friend.value}
      />
      <AddFriends friends={friends} />
    </>
  );
}

export default FriendsList;
