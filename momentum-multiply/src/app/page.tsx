import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatToExpect from "@/components/WhatToExpect";
import HowYouFeeling from "@/components/HowYouFeeling";
import WhatHappensNext from "@/components/WhatHappensNext";
import ChooseYourJourney from "@/components/ChooseYourJourney";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <WhatToExpect />
      <HowYouFeeling />
      <WhatHappensNext />
      <ChooseYourJourney />
      <ComingSoon />
      <Footer />
    </main>
  );
}
