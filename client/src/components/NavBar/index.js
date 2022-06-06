import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
      <a href = "/" className = "home">
        Home
      </a>
      <ul>
        <a href = "/about">About</a>
        <a href = "/photos">Photos</a>
      </ul>
    </div>
  )
}
