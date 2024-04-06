import Image from "next/image";
import MagicButton from "../MagicButton";

export default function Hero({styles}) {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroTitle}>
        <h1>GD Motors: ваше лучшее место для автосервиса, автоимпорта и автопроката</h1>
        <p>
          Просмотрите наш выбор импортных автомобилей, чтобы найти идеальный
          вариант для вас.
        </p>
        <div className={styles.buttonWrapper}>
          <MagicButton color={"red"} text={"все автомобили"} />
          <MagicButton color={"white"} text={"Связаться с нами"} />
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.carImageHero}>
          <Image
            src="/images/bmw.png"
            fill
            sizes="100%"
            alt="Логотип нижнего колонтитула"
          />
        </div>
      </div>
    </section>
  );
}
