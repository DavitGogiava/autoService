import Image from "next/image";

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="logo">
        <Image
          src="/images/Logo.png" // Route of the image file
          height={70} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </div>
      <nav className="navigation">
        <a href="homepage">домашняя страница</a>
        <a href="req">запрос автомобиля</a>
        <a href="about">о нас</a>
        <a href="contact">контакт</a>
      </nav>
    </header>
  );
}
