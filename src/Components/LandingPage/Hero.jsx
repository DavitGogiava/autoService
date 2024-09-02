import Image from "next/image";
import MagicButton from "../MagicButton";

export default function Hero({styles}) {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroTitle}>
        <h1>Foo Motors: Your Best Destination for Auto Service, Auto Import, and Auto Rental.</h1>
        <p>
          Browse our selection of imported cars to find the perfect option for you.
        </p>
        <div className={styles.buttonWrapper}>
          <MagicButton color={"red"} text={"All Cars"} />
          <MagicButton color={"white"} text={"Contact Us"} />
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.carImageHero}>
          <Image
            src="/images/3.png"
            fill
            sizes="100%"
            alt="Logo BMW"
          />
        </div>
      </div>
    </section>
  );
}
