import Image from "next/image";

export default function CarListing({ styles }) {
  const cards = [
    {
      imageSrc: "/images/z1.png",
      text: "Mercedes-Benz C 300",
      prices: [
        "1-5 days – 600",
        "5-8 days – 550",
        "8-15 days – 500",
        "15-30 days – 300",
      ],
      year: "2018",
      range: "124000",
      Engine: "2.0",
      Cabriolet: true,
      Details:
        "AMG package (wheels, interior, body kit). 360° surround view camera, seats with full adjustments and heating, LED headlights, Burmester audio system.",
    },
    {
      imageSrc: "/images/z2.png",
      text: "Mercedes E400",
      prices: [
        "1-5 days – 450",
        "5-8 days – 400",
        "8-15 days – 300",
        "15-30 days – 220",
      ],
      year: "2014",
      range: "106400",
      Engine: "3.0",
      Cabriolet: true,
      Details: "Harman Kardon audio system",
    },
    {
      imageSrc: "/images/z3.png",
      text: "BMW 228i",
      prices: [
        "1-5 days – 400",
        "5-8 days – 350",
        "8-15 days – 250",
        "15-30 days – 150",
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
        "1-5 days – 500",
        "5-8 days – 450",
        "8-15 days – 350",
        "15-30 days – 250",
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
              <p className={styles.carName}>Tbilisi, Georgia</p>
              <p className={styles.carRange}>Mileage: {card.range} KM</p>
              <p className={styles.carEngine}>Engine: {card.Engine} L</p>
              <p className={styles.CabrioletY}>
                Cabriolet: {card.Cabriolet ? "Yes" : "No"}
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
