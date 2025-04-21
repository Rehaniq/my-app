import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/Navigation';
import Back from './DropBack/Back';
import './MenuButton.css';

const MenuButton = ({ open, closed }) => {
  const menuClasses = ['MenuButton', open ? 'Open' : 'Close'].join(' ');

  return (
    <>
      <Back show={open} clicked={closed} />
      <div className={menuClasses}>
        <div className="Logoo">
          <Logo />
        </div>
        <nav>
          <Navigation />
        </nav>
      </div>
    </>
  );
};

export default MenuButton;
