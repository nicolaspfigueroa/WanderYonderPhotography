import React from 'react';
import auth from '../../utils/auth';
import apiService from '../../services/ApiService';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Logout = (props) => {
  let navigate = useNavigate();
  const handleClick = () => {
    apiService.logout();
    handleAuth();
  };

  const handleAuth = () => {
    props.setIsAuthenticated(false);
    localStorage.removeItem('accessToken');
    auth.logout(() => navigate('/'));
  };

  return (
    <div className = "logout">
      <h2>Are you sure you want to log out?</h2>
      <div className="buttons">
      <Link to="/">
        <button className="confirm-btn">No</button>
      </Link>
      <button className="confirm-btn" onClick={() => handleClick()}>
        Yes
      </button>
      </div>
    </div>
  );
};

export default Logout;
