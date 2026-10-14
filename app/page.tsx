import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Universes from "@/components/Universes";
import Shop from "@/components/Shop";
import Bijoux from "@/components/Bijoux";
import Ateliers from "@/components/Ateliers";
import SurMesure from "@/components/SurMesure";
import Avis from "@/components/Avis";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Universes />
        <Shop />
        <Bijoux />
        <Ateliers />
        <SurMesure />
        <Avis />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
