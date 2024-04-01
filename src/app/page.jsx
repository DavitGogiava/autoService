import Image from "next/image";
import Hero from "@/Components/LandingPage/Hero";
import Catalogue from "@/Components/LandingPage/Catalogue";
import AboutUs from "@/Components/LandingPage/AboutUs";

export default function Home() {
  return (
    <main className="landing-wrapper">
        <Hero />
        <Catalogue />
        <AboutUs />
    </main>
  );
}
