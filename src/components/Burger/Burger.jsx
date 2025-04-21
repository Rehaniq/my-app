import React from 'react';
import './Burger.css';
import BurgerIngredeints from './BurgerIngredients/BurgerIngredients';

const Burger = ({ ingredients }) => {
  
  
  const transformedIngredients = Object.keys(ingredients)
    .flatMap((igKey) => 
      [...Array(ingredients[igKey])]
        .map((_, i) => <BurgerIngredeints key={igKey + i} type={igKey} />)
    );

  return (
    <div className='Burger'>
      <BurgerIngredeints type='bread-top' />
      {transformedIngredients.length === 0 ? (
        <p>Please start adding ingredients!</p>
      ) : (
        transformedIngredients
      )}
      <BurgerIngredeints type='bread-bottom' />
    </div>
  );
};

export default Burger;