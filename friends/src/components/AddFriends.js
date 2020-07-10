import React from "react";

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
