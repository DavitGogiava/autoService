"use client"
import HamburgerMenu from "./LandingPage/HamburgerMenu";
import Logo from "./Logo";

export default function Header() {


  return (
    <header className="header-wrapper">
      <Logo />
      <nav className="navigation">
        <a href="AutoImport">автоимпорт</a>
        <a href="AutoService">автосервис</a>
        <a href="Contact">контакт</a>
      </nav>
      <HamburgerMenu />
      
    </header>
  );
}
