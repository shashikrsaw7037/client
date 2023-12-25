// src/components/UserCard.js
import React from 'react';
import './UserCard.css'; // Import your custom styles

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div className="user-info">
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
