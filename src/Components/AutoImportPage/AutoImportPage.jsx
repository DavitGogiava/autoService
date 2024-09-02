import Image from "next/image";

export default function AutoImportPage({ styles }) {
  return (
    <div className={styles.AutoImportInfoWrapper}>
      <div className={styles.AutoImportInfoContainer}>
        <div className={styles.titleSection}>
          <div className={styles.title}>
            <h1>
              Car <br></br> Import
            </h1>
          </div>
          <div className={styles.sites}>
            <p>Cars are sourced from American auctions</p>
            <div className={styles.lower}>
              <div className={styles.imgContainer}>
                <Image src={"/images/Copart.png"} fill alt={"copart"} />
              </div>
              <div className={styles.imgContainer}>
                <Image src={"/images/Iaai.png"} fill alt={"Iaai"} />
              </div>
              <div className={styles.imgContainer}>
                <Image src={"/images/Manheim.png"} fill alt={"Manheim"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainText}>
          <p>The delivery time to Georgia is 2-3 months.</p>
          <p>
            Commission: For a car costing up to $20,000 - $500 per car.
            <br></br>
            For a car costing $20,000 and above - $1,000 plus an auction fee averaging around 8%.
          </p>
        </div>
      </div>
    </div>
  );
}
