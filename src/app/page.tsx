import { About } from "@/components/sections/About";
import { Certificate } from "@/components/sections/Certificate";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { International } from "@/components/sections/International";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Certificate />
      <Founder />
      <WhyChoose />
      <Process />
      <International />
      <Contact />
      <FAQ />
    </>
  );
}
