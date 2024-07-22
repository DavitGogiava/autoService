import Image from "next/image";

export default function CarListing({ styles }) {
  const cards = [
    {
      imageSrc: "/images/z1.png",
      text: "Mercedes-Benz C 300",
      prices: [
        "1-5 дней – 600",
        "5-8 дней – 550",
        "8-15 дней – 500",
        "15-30 дней – 300",
      ],
      year: "2018",
      range: "124000",
      Engine: "2.0",
      Cabriolet: true,
      Details:
        "AMG пакет (Диски, салон, обвес). Камера кругового обзора 360*, сиденья со всеми регулировками и подогревом, led- фары, музыка Burmester.",
    },
    {
      imageSrc: "/images/z2.png",
      text: "Mercedes E400",
      prices: [
        "1-5 дней – 450",
        "5-8 дней – 400",
        "8-15 дней – 300",
        "15-30 дней – 220",
      ],
      year: "2014",
      range: "106400",
      Engine: "3.0",
      Cabriolet: true,
      Details: "Аудио система Harman Kardon",
    },
    {
      imageSrc: "/images/z3.png",
      text: "BMW 228i",
      prices: [
        "1-5 дней – 400",
        "5-8 дней – 350",
        "8-15 дней – 250",
        "15-30 дней – 150",
      ],
      year: "2015",
      range: "179000",
      Engine: "2.0",
      Cabriolet: true,
      Details: "",
    },
    {
      imageSrc: "/images/z4.png",
      text: "Audi A5",
      prices: [
        "1-5 дней – 500",
        "5-8 дней – 450",
        "8-15 дней – 350",
        "15-30 дней – 250",
      ],
      year: "2018",
      range: "84000",
      Engine: "2.0",
      Cabriolet: true,
      Details: "",
    },
  ];

  return (
    <div className={styles.carlistingWrapper}>
      <div className={styles.back}></div>
      {cards.map((card, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src={card.imageSrc} fill alt={card.text} />
          </div>
          <div className={styles.carDetails}>
            <div className={styles.carMainDetails}>
              <div className={styles.circle}>{card.year}</div>
              <p className={styles.carYear}>{card.text}</p>
              <p className={styles.carName}>Тбилиси, Грузия</p>
              <p className={styles.carRange}>Пробег: {card.range} км</p>
              <p className={styles.carEngine}>Двигатель: {card.Engine} л</p>
              <p className={styles.CabrioletY}>
                Кабриолет: {card.Cabriolet ? "Да" : "Нет"}
              </p>
              {card.Details && (
                <p className={styles.carAdditionalDetails}>{card.Details}</p>
              )}
            </div>
            <div className={styles.carSecondaryDetails}>
              {card.prices.map((price, priceIndex) => (
                <p className={styles.carPrice} key={priceIndex}>
                  {price} Gel
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
