import ContactUsPage from "@/Components/ContactUsPage/ContactUsPage"
import styles from "@/Components/ContactUsPage/ContactUs.module.css"

export const metadata = {
  title: "Contact Us",
};

export default function ContactUs() {
  return (
    <section className={styles.ContactUsPageWrapper}>
      <ContactUsPage styles={styles} />
    </section>
  );
}
