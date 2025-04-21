import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import Navigation from '../NavigationItems/Navigation'
import ToggleButton from '../MenuButton/ToggleButton/ToggleButton'



const Toolbar = ( props ) => {
  return (
    <header className='Toolbar'>
      <ToggleButton clicked={props.drawerToggleClicked}/>
      <div className='Log'>
      <Logo />
      </div>
      <nav className='DesktopOnly'>
      <Navigation />
      </nav>
    
    </header>
  )
}

export default Toolbar;
