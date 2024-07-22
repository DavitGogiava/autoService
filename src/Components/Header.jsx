

import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

export default function Header() {


  return (
    <header className="header-wrapper">
      <Logo />
      <nav className="navigation">
        <a href="AutoImport">автоимпорт</a>
        <a href="AutoRental">аренда</a>
        <a href="AutoSell">автопрокат</a>
        <a href="AutoService">автосервис</a>
        <a href="Contact">контакт</a>
      </nav>
      <HamburgerMenu />      
    </header>
  );
}
