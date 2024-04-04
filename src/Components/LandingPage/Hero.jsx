import Image from "next/image";
import MagicButton from "../MagicButton";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-title">
        <h1>Найдите автомобиль, который соответствует вашему образу жизни</h1>
        <p>
          Просмотрите наш выбор импортных автомобилей, чтобы найти идеальный
          вариант для вас.
        </p>
        <div className="button-wrapper">
          <MagicButton color={"red"} text={"все автомобили"} />
          <MagicButton color={"white"} text={"Связаться с нами"} />
        </div>
      </div>
      <div className="hero-right">
        <div className="car-image-hero">
          <Image
            src="/images/bmw.png"
            fill
            alt="FooterLogo"
            className="footerImage"
          />
        </div>
      </div>
    </section>
  );
}
