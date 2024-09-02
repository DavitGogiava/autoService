import Image from "next/image";

export default function AutoServicePage({ styles }) {
  const cards = [
    {
      imageSrc: "/images/AutoService/1.webp",
      text: "Bodywork repair",
    },
    {
      imageSrc: "/images/AutoService/2.webp",
      text: "Car painting",
    },
    {
      imageSrc: "/images/AutoService/3.webp",
      text: "Car polishing",
    },
    {
      imageSrc: "/images/AutoService/4.webp",
      text: "Suspension repair",
    },
    {
      imageSrc: "/images/AutoService/5.webp",
      text: "Engine repair",
    },
    {
      imageSrc: "/images/AutoService/6.webp",
      text: "Air conditioning recharge",
    },
    {
      imageSrc: "/images/AutoService/7.webp",
      text: "Computer diagnostics",
    },
    {
      imageSrc: "/images/AutoService/8.webp",
      text: "Electrical repair",
    },
    {
      imageSrc: "/images/AutoService/9.webp",
      text: "Wheel alignment",
    },
    {
      imageSrc: "/images/AutoService/10.webp",
      text: "Parts selection",
    },
    {
      imageSrc: "/images/AutoService/11.webp",
      text: "Radiator cleaning",
    },
    {
      imageSrc: "/images/AutoService/12.webp",
      text: "Comprehensive diagnostics",
    },
  ];
  return (
    <div className={styles.AutoServicePageContainer}>
      <h1 className={styles.headline}>
        <span className={styles.spanCol}>Foo Motors</span>Auto Service
      </h1>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          {index % 2 === 0 ? (
            <>
              <div className={styles.left}>
                <p className={styles.cardTitle}>{card.text}</p>
              </div>
              <div className={styles.rightImgCont}>
                <Image src={card.imageSrc} fill alt={card.text} />
              </div>
            </>
          ) : (
            <>
              <div className={styles.rightImgCont}>
                <Image src={card.imageSrc} fill alt={card.text} />
              </div>
              <div className={styles.left}>
                <p className={styles.cardTitle}>{card.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
