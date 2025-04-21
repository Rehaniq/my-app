import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import ToControls from '../../components/Burger/ToControls/ToControls';
import Modal from '../../components/UI/Modal';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);
  const [purchaseIt, setPurchaseIt] = useState(false);
  const [ordering, setOrdering] = useState(false);

  const updatePurchaseState = (updatedIngredients) => {
    const sum = Object.values(updatedIngredients).reduce((acc, el) => acc + el, 0);
    setPurchaseIt(sum > 0);
  };

  const addIngredient = (type) => {
    const updated = { ...ingredients, [type]: ingredients[type] + 1 };
    setIngredients(updated);
    setTotalPrice(prev => prev + INGREDIENT_PRICES[type]);
    updatePurchaseState(updated);
  };

  const removeIngredient = (type) => {
    if (ingredients[type] <= 0) return;
    const updated = { ...ingredients, [type]: ingredients[type] - 1 };
    setIngredients(updated);
    setTotalPrice(prev => prev - INGREDIENT_PRICES[type]);
    updatePurchaseState(updated);
  };
  
 
  const handleOrderClick = () => setOrdering(true);
  const closeModal = () => setOrdering(false);

  return (
    <>
      <Modal show={ordering} onClose={closeModal}>
        <h2>Your Order</h2>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {Object.entries(ingredients).map(([key, value]) =>
            value > 0 ? <li key={key}>{key}: {value}</li> : null
          )}
        </ul>
        <p><strong>Total Price: ${totalPrice.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
      </Modal>

      <Burger ingredients={ingredients} />
      <ToControls
        ingredientAdded={addIngredient}
        ingredientRemoved={removeIngredient}
        Purchaseit={purchaseIt}
        price={totalPrice.toFixed(2)}
        onOrderClick={handleOrderClick}
      />
    </>
  );
};

export default BurgerBuilder;
