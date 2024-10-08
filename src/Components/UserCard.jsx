import React from 'react';
import "./UserCard.css"

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
``