import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function NavBar({ isAuthenticated }) {
  return (
    <div className="nav">
      <div className = "nav-items">
        <Link to = "/" className = "home">
          HOME
        </Link>
        <ul>
          <li>
          <Link to = "/about">ABOUT</Link>
          </li>
          <li>
          <Link to = "/photos">PHOTOS</Link>
          </li>
          <li>
            <Link to = "/cart">CART</Link>
          </li>
          {isAuthenticated ? (
            <>
            <li>
              <Link to = "/admin">ADD / EDIT PHOTOS</Link>
            </li>
            <li>
              <Link to = "/logout">LOGOUT</Link>
            </li>
            </>
          ) : (
            <>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
