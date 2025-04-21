import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({ link, children }) => {
  return (
    <li className="Navigationitem">
      <NavLink 
        to={link}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
