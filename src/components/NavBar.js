import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/create-post">Create Post</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
