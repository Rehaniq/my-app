import React from 'react'
import ButtonControl from './ButtonControl/ButtonControl'
import './ToControls.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const ToControls = ({ ingredientAdded, ingredientRemoved, price, Purchaseit, onOrderClick }) => {

  return (
    <div className="controlsSection">
      <p>Current Price: <strong>{price}</strong></p>
      {controls.map(ctrl => (
        <ButtonControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          
        />
      ))}
      <button className="OrderButton" disabled={!Purchaseit} onClick={onOrderClick}>
        ORDER NOW
      </button>
    </div>
  );
};

export default ToControls;
