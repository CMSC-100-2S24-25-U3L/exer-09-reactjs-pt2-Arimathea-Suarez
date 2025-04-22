
// Imports
import React from "react";
import "../index.css"; 

// A functional component in order to display the shopping cart
const Cart = ({ items, onDelete }) => {

  return (
    <div className="cart-container">
      {/* Title of the shopping cart */}
      <h3 className="cart-title">Shopping Cart</h3>

      {/* List to display the cart items */}
      <ul className="cart-list">
        {/* Conditional rendering: If the cart is empty, display a message */}
        {items.length === 0 && (
          <li className="empty-cart-message">Your cart is currently empty.</li>
        )}
        {/* Mapping over the 'items' array to render each item in the cart */}
        {items.map((item, index) => (
          <li key={index} className="cart-item">
            {/* Display the name of the item */}
            <span className="item-name">{item}</span>
            {/* Button to remove the item from the cart */}
            <button onClick={() => onDelete(index)} className="remove-button">
              Remove
            </button>
            {/* When clicked, calls the 'onDelete' function passed as a prop, with the index of the item to be removed */}
          </li>
        ))}
      </ul>

      {/* Display the total number of items in the cart */}
      <p className="cart-total">
        Total Items: <span className="total-count">{items.length}</span>
        {/* 'items.length' gives the current number of items in the 'items' array */}
      </p>
    </div>
  );
};

export default Cart; // Exports the Cart component so it can be used in other parts of the application