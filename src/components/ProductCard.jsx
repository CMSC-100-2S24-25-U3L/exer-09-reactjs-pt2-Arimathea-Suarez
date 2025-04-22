
// Imports
import React from "react"; 
import "../index.css"; 

// A functional component to display a product card
const ProductCard = ({ name, onAddToCart }) => {

  return (
    <div className="product-card">
      {/* Placeholder for the product image */}
      <div className="product-image">Item with picture</div>
      {/* Will display the name of the product */}
      <h3>{name}</h3>
      {/* The button to add the product to the cart */}
      <button
        className="add-to-cart"
        onClick={() => onAddToCart(name)}
        // When clicked, calls the 'onAddToCart' function
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard; // Exports the ProductCard component so it can be used in other parts of the application