import Hero from "@/components/Hero";
import CampaignIntro from "@/components/CampaignIntro";
import FivePillars from "@/components/FivePillars";
import HowYouFeeling from "@/components/HowYouFeeling";
import ActivationsHub from "@/components/ActivationsHub";
import Competition from "@/components/Competition";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CampaignIntro />
      <HowYouFeeling />
      <FivePillars />
      <ActivationsHub />
      <Competition />
      <Footer />
    </main>
  );
}
