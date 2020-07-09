import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const state = useState({ friends: [] });

useEffect(() => getData());

function getData() {
  axiosWithAuth()
    .get("/friends")
    .then((response) => {
      useState({
        friends: response.data.friends.map((friend) => {
          console.log(friend);
        }),
      });
    })
    .catch((errorMessage) => {
      console.error(errorMessage);
    });
}
