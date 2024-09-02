import Footer from "@/Components/Footer";
import "./globals.css";
import Header from "@/Components/Header";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Foo Motors is an auto service company.",
  description:
    "Welcome to Foo Motors, your one-stop shop for all your automotive needs. We specialize in auto service, car imports, and car rentals. Whether you need regular maintenance, assistance with importing a car, or reliable car rental services, our experienced team is always ready to help. Trust Foo Motors for exceptional service and experience in the automotive industry. Contact us today to learn more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <a className="floater" href="">
          <div className="floatleft">
            <Image
              src="/images/Telegram.webp"
              fill
              sizes="100%"
              alt="Telegram"
            />
          </div>
          <div className="floatright">Contact Us</div>
        </a>

        <Footer />
      </body>
    </html>
  );
}
