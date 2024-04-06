import Image from "next/image";

export default function CarListing({ styles }) {
  const cards = [
    {
      imageSrc: "/images/1.png",
      text: "Mercedes-Benz C 300",
      price: "100",
      year: "2018"
    },
    {
      imageSrc: "/images/2.png",
      text: "Audi A5",
      price: "200",
      year: "2019"
      
    },
    {
      imageSrc: "/images/3.png",
      text: "Audi RS5",
      price: "300",
      year: "2019"
    },
    {
      imageSrc: "/images/4.png",
      text: "Toyota RAV4",
      price: "300",
      year: "2021"
    },
    {
      imageSrc: "/images/5.png",
      text: "Toyota RAV4",
      price: "300",
      year: "2020"
    },
  ];

  return (
    <div className={styles.carlistingWrapper}>
        <div className={styles.back}></div>
      {cards.map((card, index) => (
        <div key={index} className={styles.item}>
          <Image src={card.imageSrc} fill alt={card.text} />
          <div className={styles.carDetails}>
            <div className={styles.circle}>{card.year}</div>
            <p className={styles.carName}>{card.text}</p>
            <p className={styles.carName}>{card.price}$/день</p>
            <p className={styles.carName}>Тбилиси, Грузия</p>
          </div>
        </div>
      ))}
    </div>
  );
}
