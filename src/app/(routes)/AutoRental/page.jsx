import CarListing from "@/Components/AutoRentalPage/CarListing";
import styles from "@/Components/AutoRentalPage/AutoRental.module.css"
export default function AutoRental() {


  return (
    <section className={styles.autorentalWrapper}>
      <div className={styles.autorentalTitle}>
        <h1>Найдите лучшее предложение от <span style={{color: "var(--red-col)"}}>GD</span> для вас.</h1>
      </div>
      <CarListing styles={styles}/>
    </section>
  );
}
