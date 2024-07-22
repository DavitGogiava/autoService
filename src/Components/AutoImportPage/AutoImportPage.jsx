import Image from "next/image";

export default function AutoImportPage({ styles }) {
  return (
    <div className={styles.AutoImportInfoWrapper}>
      <div className={styles.AutoImportInfoContainer}>
        <div className={styles.titleSection}>
          <div className={styles.title}>
            <h1>
              Привоз <br></br> автомобилей
            </h1>
          </div>
          <div className={styles.sites}>
            <p>Автомобили играются на американских аукционах</p>
            <div className={styles.lower}>
              <div className={styles.imgContainer}>
                <Image src={"/images/Copart.png"} fill alt={"copart"} />
              </div>
              <div className={styles.imgContainer}>
                <Image src={"/images/Iaai.png"} fill alt={"copart"} />
              </div>
              <div className={styles.imgContainer}>
                <Image src={"/images/Manheim.png"} fill alt={"copart"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainText}>
          <p>Срок доставки до Грузии 2-3 месяца.</p>
          <p>
            Комиссия: автомобиль стоимостью до 20000$ - 500$ автомобиль
            стоимостью
            <br></br>
            от 20000$ - 1000$ + комиссия аукциона в среднем от 8%
          </p>
        </div>
      </div>
    </div>
  );
}
