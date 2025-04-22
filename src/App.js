/*
Arimathea Charmille H. Suarez
CMSC 100 - U3L
Exercise 9
*/

// Imports
import React, { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./index.css";

const App = () => {
  // This is the state to manage the items in the shopping cart
  const [cartItems, setCartItems] = useState([]);

  // The function to add a product to the shopping cart
  const handleAddToCart = (productName) => {
    setCartItems([...cartItems, productName]);
    console.log("Cart Items:", [...cartItems, productName]); // Logs the updated cart
  };

  // The function to delete an item from the shopping cart
  const handleDeleteFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove)); // Updates cartItems by filtering out the item at the specified index
  };

  // This "Items For Sale" list
  const [itemsForSale] = useState([
    { id: '1', name: 'Asahy Power Juicer' },
    { id: '2', name: 'NutriBlend Pro' },
    { id: '3', name: 'Smoothie Master 3000' },
    { id: '4', name: 'GreenBoost Juicer' },
  ]);

  // The "Featured Appliances" list
  const [featuredAppliances] = useState([
    { id: '10', name: 'Samsong Washing Machine' },
    { id: '11', name: 'Whirlpool Dryer' },
    { id: '12', name: 'LG Smart Refrigerator' },
    { id: '13', name: 'Bosch Dishwasher' },
  ]);

  // The "Cooling Solutions" list
  const [coolingSolutions] = useState([
    { id: '20', name: 'Hanabesh Electric Fan' },
    { id: '21', name: 'Mistral Box Fan' },
    { id: '22', name: 'Tornado Tower Fan' },
    { id: '23', name: 'Medea Aircon' },
  ]);

  // The "Kitchen Gadgets" list
  const [kitchenGadgets] = useState([
    { id: '30', name: 'Electric Kettle' },
    { id: '31', name: 'Toaster Oven' },
    { id: '32', name: 'Coffee Maker' },
    { id: '33', name: 'Hand Mixer' },
  ]);

  // For the grid layout using CSS inside the App.js
  const productListStyle = {
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // Creates responsive columns with a minimum width of 200px
    gap: "10px", 
    marginBottom: "20px", 
  };

  return (
    <div>
      <Header /> {/* This renders the Header component */}
      {/* The main container for using flexbox to position product lists and the cart */}
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}> 
        
        <div style={{ flex: 3 }}>
          <div>
            <h2>Items For Sale</h2>
            <div style={productListStyle}>
              {/* This maps over the itemsForSale array and renders a ProductCard for each item */}
              {itemsForSale.map((product) => (
                <ProductCard
                  key={product.id} // The unique key for each product
                  name={product.name} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
          </div>
          <div>
            <h2>Featured Appliances</h2>
            <div style={productListStyle}>
              {/* This maps over the featuredAppliances array and renders ProductCards */}
              {featuredAppliances.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
          <div>
            <h2>Cooling Solutions</h2>
            <div style={productListStyle}>
              {/* Maps over the coolingSolutions array and renders ProductCards */}
              {coolingSolutions.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
          <div>
            <h2>Kitchen Gadgets</h2>
            <div style={productListStyle}>
              {/* This maps over the kitchenGadgets array and renders ProductCards */}
              {kitchenGadgets.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
        {/* The Container for the Cart component*/}
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f8f8", borderRadius: "8px" }}> {/* Have added a padding and background to cart */}
          <Cart items={cartItems} onDelete={handleDeleteFromCart} /> {/* Renders the Cart component, passing cart items and the delete function as props */}
        </div>
      </div>
    </div>
  );
};

export default App;