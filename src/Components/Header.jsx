

import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

export default function Header() {


  return (
    <header className="header-wrapper">
      <Logo />
      <nav className="navigation">
        <a href="AutoImport">Import</a>
        <a href="AutoRental">Rental</a>
        <a href="AutoSell">Sell</a>
        <a href="AutoService">Service</a>
        <a href="ContactUs">Contact</a>
      </nav>
      <HamburgerMenu />      
    </header>
  );
}
