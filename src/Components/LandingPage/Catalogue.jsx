import Image from "next/image";

export default function Catalogue({ styles }) {
  return (
    <section className={styles.catalogueWrapper}>
      <div className={styles.catalogueContainer}>
        <div className={styles.row}>
          <h2 className={styles.carText}>Хэтчбек</h2>
          <Image
            src="/images/arrow-white.png"
            height={40}
            width={40}
            alt="значок стрелки"
            className={styles.arrow}
          />
          <div className={styles.carImageContainer}>
            <Image
              src="/images/hatchback.png"
              fill
              sizes="100%"
              alt="Хэтчбек"
            />
          </div>
        </div>
        <div className={styles.row}>
          <h2 className={styles.carText}>внедорожник</h2>

          <Image
            src="/images/arrow-black.png"
            height={40}
            width={40}
            alt="значок стрелки"
            className={styles.arrow}
          />

          <div className={styles.carImageContainer}>
            <Image
              src="/images/SUV.png"
              fill
              sizes="100%"
              alt="внедорожник"
            />
          </div>
        </div>
        <div className={styles.row}>
          <h2 className={styles.carText}>Купе</h2>

          <Image
            src="/images/arrow-white.png"
            height={40}
            width={40}
            alt="значок стрелки"
            className={styles.arrow}
          />
          <div className={styles.carImageContainer}>
            <Image src="/images/Coupe.png" fill sizes="100%" alt="Купе" />
          </div>
        </div>
      </div>
    </section>
  );
}
