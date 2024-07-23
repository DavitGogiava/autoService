import AutoServicePage from "@/Components/AutoServicePage/AutoServicePage"
import styles from "@/Components/AutoServicePage/AutoService.module.css"

export const metadata = {
  title: "AutoService",
};

export default function AutoService() {
  return (
    <section className={styles.AutoServicePageWrapper}>
      <AutoServicePage styles={styles} />
    </section>
  );
}
