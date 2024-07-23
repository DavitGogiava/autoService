import Footer from "@/Components/Footer";
import "./globals.css";
import Header from "@/Components/Header";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "GD Motors автосервисная компания",
  description:
    "Добро пожаловать в GD Motors, универсальное место для всех ваших автомобильных потребностей. Мы специализируемся на автосервисе, импорте автомобилей и услугах по аренде автомобилей. Если вам нужно регулярное техническое обслуживание, помощь с импортом автомобиля или надежный прокат автомобилей, наша опытная команда всегда готова помочь. Доверьтесь GD Motors и получите исключительный сервис и опыт в автомобильной промышленности. Свяжитесь с нами сегодня, чтобы узнать больше!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <div className="floater">
          <div className="floatleft">
            <Image
              src="/images/Telegram.webp"
              fill
              sizes="100%"
              alt="Telegram"
            />
          </div>
          <div className="floatright">связаться с нами</div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
