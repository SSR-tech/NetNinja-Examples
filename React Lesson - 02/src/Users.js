import React from "react";

function Users({ allUsers, removeUser }) {
  const userList = allUsers.map(user => {
    return (
      <div key={user.id}>
        <h2>Name:{user.name}</h2>
        <h2>E-Mail:{user.email}</h2>
        <h2>Age:{user.age}</h2>
        <button
          onClick={() => {
            removeUser(user.id);
          }}
        >
          Delete User
        </button>
      </div>
    );
  });
  return <div>{userList}</div>;
}

export default Users;
