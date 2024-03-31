import Image from "next/image";

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
          <a href="req">Посмотреть все автомобили</a>
          <a href="contact">Связаться с нами</a>
        </div>
      </div>
      <div className="car-image">
        <Image
          src="/images/bmw.png"
          height={520}
          width={800}
          alt="Your Name"
        />
      </div>
    </section>
  );
}
