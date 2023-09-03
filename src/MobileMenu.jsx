import React from "react";
import "./MobileMenu.css"; 

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/curriculum">Curriculum</a></li>
        <li><a href="/StudioPolicies">Studio Policies</a></li>
        <li><a href="/FAQs">FAQs</a></li>
        <li><a href="/FreeLesson">Try a free lesson</a></li>
      </ul>
      <button onClick={toggleMenu} className="close-button">
        Close
      </button>
    </div>
  );
};

export default MobileMenu;