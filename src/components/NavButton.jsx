import React from 'react'; // Imports the React library

// A functional component for a navigation button
const NavButton = ({ label, href }) => {
  
  return (
    <a href={href}>{label}</a>

  );
};

export default NavButton; // Exports the NavButton component so it can be used in other files