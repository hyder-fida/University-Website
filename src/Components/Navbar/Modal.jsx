// Modal.js
import React from 'react';

const Modal = ({ links, visible }) => {
  if (!visible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="modal-link" target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Modal;
