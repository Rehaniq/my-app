import React from 'react'
import './ToggleButton.css'

const ToggleButton = ( props) => {
  return (
    <div className='ToggleButton' onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default ToggleButton