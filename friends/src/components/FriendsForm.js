import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendsForm(props) {
  return (
    <form onSubmit={props.handleAddFriend}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.value}
          onChange={props.handleFriendForm}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={props.value}
          onChange={props.handleFriendForm}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={props.value}
          onChange={props.handleFriendForm}
        />
      </label>
      <button>Add</button>
    </form>
  );
}

export default FriendsForm;
