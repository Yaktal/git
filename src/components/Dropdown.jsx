// src/components/Dropdown.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Navtitle from './Navtitle';
import Page from './Pages/Page';

const Dropdown = ({ names, options, isOpen, onToggle }) => {
  

  const handleMouseClick = () => {
    onToggle()
  };

  const handleOptionClick = () => {
    isOpen(false);
  };
  return (
    <div className={`dropdown text-3xl font-bold ${isOpen&&"text-green-800 hover:text-green-800"}`}   >
      <button onClick={handleMouseClick} className="dropdown-toggle">{names}<img className='mt-5' src='ArrowVector.png' alt=""/></button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <div className="dropdown-item">
              <NavLink key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
              </NavLink>
            </div>
              
          ))}
        </ul>
      )}
      
      
    </div>
  );
};

export default Dropdown;
