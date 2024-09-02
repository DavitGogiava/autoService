import Image from "next/image";

export default function Catalogue({ styles }) {
  return (
    <section className={styles.catalogueWrapper}>
      <div className={styles.catalogueContainer}>
        <div className={styles.row}>
          <h2 className={styles.carText}>Hatchback</h2>
          <Image
            src="/images/arrow-white.png"
            height={40}
            width={40}
            alt="Arrow Icon"
            className={styles.arrow}
          />
          <div className={styles.carImageContainer}>
            <Image
              src="/images/hatchback.png"
              fill
              sizes="100%"
              alt="Hatchback"
            />
          </div>
        </div>
        <div className={styles.row}>
          <h2 className={styles.carText}>SUV</h2>

          <Image
            src="/images/arrow-black.png"
            height={40}
            width={40}
            alt="Arrow Icon"
            className={styles.arrow}
          />

          <div className={styles.carImageContainer}>
            <Image
              src="/images/SUV.png"
              fill
              sizes="100%"
              alt="SUV"
            />
          </div>
        </div>
        <div className={styles.row}>
          <h2 className={styles.carText}>Coupe</h2>

          <Image
            src="/images/arrow-white.png"
            height={40}
            width={40}
            alt="Arrow Icon"
            className={styles.arrow}
          />
          <div className={styles.carImageContainer}>
            <Image src="/images/Coupe.png" fill sizes="100%" alt="Coupe" />
          </div>
        </div>
      </div>
    </section>
  );
}
