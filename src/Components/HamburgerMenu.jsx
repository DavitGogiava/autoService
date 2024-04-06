"use client";
import { useState, useEffect } from "react";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen); // Toggles the value of isMenuOpen
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Enable scrolling when component unmounts
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
        <a href="AutoImport">автоимпорт</a>
        <a href="AutoRental">автопрокат</a>
        <a href="AutoService">автосервис</a>
        <a href="Contact">контакт</a>
      </nav>
    </div>
  );
}
