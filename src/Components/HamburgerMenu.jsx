"use client";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = ""; 
    }

    return () => {
      document.body.style.overflow = ""; 
    };
  }, [isMenuOpen]);
  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={handleMenuOpen}>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <nav className={`hamburger-nav ${isMenuOpen ? "active" : ""}`}>
        <a href="AutoImport">Import</a>
        <a href="AutoRental">Sell</a>
        <a href="AutoService">Service</a>
        <a href="Contact">Contact</a>
      </nav>
    </div>
  );
}
