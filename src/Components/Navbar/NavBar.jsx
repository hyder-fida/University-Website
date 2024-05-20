// NavBar.js
import React, { useState } from 'react';
import NavItem from './NavItem';
import Modal from './Modal';

const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    { 
      label: 'Home', 
      links: [
        { href: '#', label: 'Sub Link 1' },
        { href: '#', label: 'Sub Link 2' },
      ] 
    },
    { 
      label: 'About', 
      links: [
        { href: '#', label: 'Sub Link 3' },
        { href: '#', label: 'Sub Link 4' },
      ] 
    },
    { 
      label: 'Services', 
      links: [
        { href: '#', label: 'Sub Link 5' },
        { href: '#', label: 'Sub Link 6' },
      ] 
    },
    { 
      label: 'Contact', 
      links: [
        { href: '#', label: 'Sub Link 7' },
        { href: '#', label: 'Sub Link 8' },
      ] 
    },
  ];

  return (
    <div className="navbar">
      {items.map(item => (
        <NavItem 
          key={item.label}
          label={item.label} 
          onHover={() => setHoveredItem(item)}
        />
      ))}
      <Modal 
        links={hoveredItem ? hoveredItem.links : []}
        visible={hoveredItem !== null}
      />
    </div>
  );
};

export default NavBar;