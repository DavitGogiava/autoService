import Image from "next/image";
import Hero from "@/Components/LandingPage/Hero";
import Catalogue from "@/Components/LandingPage/Catalogue";

export default function Home() {
  return (
    <main className="landing-wrapper">
        <Hero />
        <Catalogue />
    </main>
  );
}
