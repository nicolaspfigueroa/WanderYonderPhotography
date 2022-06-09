import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function NavBar({ isAuthenticated }) {
  return (
    <div className="nav">
      <Link to = "/" className = "home">
        Home
      </Link>
      <ul>
        <Link to = "/about">About</Link>
        <Link to = "/photos">Photos</Link>
      </ul>
    </div>
  )
}
