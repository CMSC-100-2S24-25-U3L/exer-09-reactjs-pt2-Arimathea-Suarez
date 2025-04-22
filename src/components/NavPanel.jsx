// Imports
import React from "react"; // Imports the React library
import NavButton from "./NavButton"; // Imports the reusable NavButton component

// The navigation panel for going to different urls
const NavigationPanel = () => {
  // An array of menu items, each containing a name, URL, and unique ID
  const menus = [
    { name: "Appliances", url: "#", id: 1 },
    { name: "Groceries", url: "#", id: 2 },
    { name: "Gadgets", url: "#", id: 3 },
    { name: "Clothing", url: "#", id: 4 },
  ];

  //A function to handle button clicks (currently just logs to the console)
  const handleButtonClick = (name) => {
    console.log(`${name} button clicked!`);
    
  };

  return (
    <div className="navigation-panel">
      {/* Maps over the 'menus' array to render a NavButton for each menu item */}
      {menus.map((menu) => (
        <NavButton
          key={menu.id} // Unique key for each button, required by React for efficient rendering
          label={menu.name} // Passes the menu name as the 'label' prop to NavButton
          href={menu.url} // Passes the menu URL as the 'href' prop to NavButton
        />
      ))}
    </div>
  );
};

export default NavigationPanel;
