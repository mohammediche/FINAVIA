"use client"
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Partners from "@/components/sections/Partners";
import Metrics from "@/components/sections/Metrics";
import InteractiveServices from "@/components/sections/InteractiveServices";
import CaseStudies from "@/components/sections/CaseStudies";
import Results from "@/components/sections/Results";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
      <>
        <Hero />
        <About />
        <Partners />
        <Metrics />
         <InteractiveServices showHeader={true}/>
        <CaseStudies />
        <Results />
        <FAQ />
        <Contact />
      </>
  );
}