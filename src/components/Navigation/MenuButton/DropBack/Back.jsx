import React from 'react'
import "./Back.css"
const Back = (props) => {
  return(
    props.show ? <div onClick={props.clicked} className="back" /> : null
  );
  }

export default Back;