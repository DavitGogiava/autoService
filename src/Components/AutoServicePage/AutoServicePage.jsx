import Image from "next/image";

export default function AutoServicePage({ styles }) {
  const cards = [
    {
      imageSrc: "/images/AutoService/1.webp",
      text: "Кузовной ремонт",
    },
    {
      imageSrc: "/images/AutoService/2.webp",
      text: "Покраска авто",
    },
    {
      imageSrc: "/images/AutoService/3.webp",
      text: "Полировка авто",
    },
    {
      imageSrc: "/images/AutoService/4.webp",
      text: "Ремонт ходовой части",
    },
    {
      imageSrc: "/images/AutoService/5.webp",
      text: "Ремонт двигателей",
    },
    {
      imageSrc: "/images/AutoService/6.webp",
      text: "Заправка кондиционара",
    },
    {
      imageSrc: "/images/AutoService/7.webp",
      text: "Компютерная диагностика",
    },
    {
      imageSrc: "/images/AutoService/8.webp",
      text: "Ремонт электрики",
    },
    {
      imageSrc: "/images/AutoService/9.webp",
      text: "Развал-схождение",
    },
    {
      imageSrc: "/images/AutoService/10.webp",
      text: "Подбор запчастей",
    },
    {
      imageSrc: "/images/AutoService/11.webp",
      text: "Мойка радиаторов",
    },
    {
      imageSrc: "/images/AutoService/12.webp",
      text: "Комплексная диагностика",
    },
  ];
  return (
    <div className={styles.AutoServicePageContainer}>
      <h1 className={styles.headline}>
        <span className={styles.spanCol}>GD Motors</span>автосервис
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
