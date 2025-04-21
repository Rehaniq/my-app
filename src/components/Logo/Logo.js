import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import './Logo.css'
const Logo = ( props ) => {
  return (
    <div className='Logo'
    style={{height: props.height}}>

      <img className="LogoImg" src={burgerLogo} alt='Myburger' />
    </div>
  )
}

export default Logo;
