// src/App.js
import React, { useState } from 'react';
import './App.css'; // Import your custom styles
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="brand">Your Brand Name</div>
        <button onClick={getUsers} disabled={loading}>
          Get Users
        </button>
      </nav>

      <div className="user-card-grid">
        {loading && <div className="loader">Loading...</div>}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
