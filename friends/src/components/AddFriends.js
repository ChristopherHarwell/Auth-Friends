import React from "react";

function AddFriends(props) {
  return (
    <>
      {props.friends.map((friend) => {
        return (
          < div style={{listStyleType: "none", border: "solid black 2px"}}>
            <span>
                <h3>ID:</h3>
                <p>{friend.id}</p>
            </span>
            <span>
                <h3>Name:</h3>
                <p>{friend.name}</p>
            </span>
            <span>
                <h3>Age:</h3>
                <p>{friend.age}</p>
            </span>
            <span>
                <h3>Email:</h3>
                <p>{friend.email}</p>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default AddFriends;