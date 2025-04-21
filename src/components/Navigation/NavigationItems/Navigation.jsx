// src/components/Navigation/Navigation.jsx
import React from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();        
    navigate('/auth'); 
  };

  return (
    <ul className="Navigation">
      <NavigationItem link="/">Burger Builder</NavigationItem>

      {isAuthenticated ? (
        <>
          <NavigationItem link="/orders">Orders</NavigationItem>
          <NavigationItem onClick={handleLogout} >Logout</NavigationItem>
        </>
      ) : (
        <NavigationItem link="/auth">Authenticate</NavigationItem>
      )}
    </ul>
  );
};

export default Navigation;
