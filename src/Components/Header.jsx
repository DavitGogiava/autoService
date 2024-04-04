"use client"
import Image from "next/image";
import Logo from "./Logo";
import {useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header className="header-wrapper">
      <Logo />
      <nav className="navigation">
        <a href="AutoImport">автоимпорт</a>
        <a href="AutoService">автосервис</a>
        <a href="Contact">контакт</a>
      </nav>

      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={handleMenuOpen}>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <nav className={`hamburger-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="AutoImport">автоимпорт</a>
          <a href="AutoService">автосервис</a>
          <a href="Contact">контакт</a>
        </nav>
      </div>
    </header>
  );
}
