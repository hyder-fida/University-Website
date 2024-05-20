// NavItem.js
import React from 'react';

const NavItem = ({ label, onHover }) => {
  return (
    <div 
      className="nav-item" 
      onMouseEnter={onHover} 
      onMouseLeave={() => onHover(null)}
    >
      {label}
    </div>
  );
};

export default NavItem;
