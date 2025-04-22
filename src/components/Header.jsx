
// Imports 
import React from 'react';
import NavButton from './NavButton'; 

const Header = () => {
  // Header component for the LAZADO website
  return (
    <header className="header">
      
      <div className="logo-container">
        
        <h2>
          <span className="la">LA</span>
          <span className="za">ZA</span>
          <span className="do">DO</span>
        </h2>
      </div>

      {/* //Search bar section */}
      <div className="search-bar">
        {/* Input field for searching */}
        <input
          type="text"
          placeholder="Search for products, brands, or categories"
        />
        {/* Submit button for the search bar */}
        <button type="submit">🔍</button>
      </div>

      {/* Main navigation section */}
      <nav className="main-nav">
        {/* Navigation buttons using the reusable NavButton component */}
        <NavButton label="Appliances" href="#appliances" />
        <NavButton label="Groceries" href="#groceries" />
        <NavButton label="Gadgets" href="#gadgets" />
        <NavButton label="Clothing" href="#clothing" />
      </nav>
    </header>
  );
};

export default Header;