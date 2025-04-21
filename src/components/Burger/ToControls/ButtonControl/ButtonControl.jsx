import React from 'react';
import './ButtonControl.css';

const ButtonControl = ({ label, added, removed }) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button className="Less" onClick={removed}>Less</button>
      <button className="More" onClick={added}>More</button>
    </div>
  );
};

export default ButtonControl;