import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function AddFriends() {
  const [friends, setFriends] = useState([{
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  }]);

  axiosWithAuth()
    .post("/friends/")
    .then((res) => {
      setFriends(...friends, res.data);
    })
    .catch((err) => {
      console.error(err);
    })

function AddFriends() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name"/>
      </label>
      <label>
        Age:
        <input type="number" name="age"/>
      </label>
      <label>
        Email:
        <input type="email" name="email"/>
      </label>
    </form>
  );
}
