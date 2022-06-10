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
        <li>
        <Link to = "/about">About</Link>
        </li>
        <li>
        <Link to = "/photos">Photos</Link>
        </li>
        <li>
          <Link to = "/cart">Cart</Link>
        </li>
        {isAuthenticated ? (
          <>
          <li>
            <Link to = "/admin">Add / Edit Photos</Link>
          </li>
          <li>
            <Link to = "/logout">Logout</Link>
          </li>
          </>
        ) : (
          <>
          </>
        )}
      </ul>
    </div>
  )
}
