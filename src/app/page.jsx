import Hero from "@/Components/LandingPage/Hero";
import Catalogue from "@/Components/LandingPage/Catalogue";
import AboutUs from "@/Components/LandingPage/AboutUs";
import styles from "../Components/LandingPage/LandingPage.module.css"

export default function Home() {

  return (
    <main className={styles.landingWrapper}>
        <Hero styles={styles}/>
        <Catalogue styles={styles}/>
        <AboutUs styles={styles}/>
    </main>
  );
}
