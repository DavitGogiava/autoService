import CarListing from "@/Components/AutoRentalPage/CarListing";
import styles from "@/Components/AutoRentalPage/AutoRental.module.css";

export const metadata = {
  title: "AutoRental",
};

export default function AutoRental() {
  return (
    <section className={styles.autorentalWrapper}>
      <div className={styles.autorentalTitle}>
        <h1>
        Find The Best Car Rental Offer At{" "}
          <span className={styles.spanCol}>Foo Motors</span> For You.
        </h1>
      </div>
      <CarListing styles={styles} />
    </section>
  );
}
