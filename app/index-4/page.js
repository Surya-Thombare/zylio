"use client";

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home4/Section1";
import Section2 from "@/components/sections/home4/Section2";
import Section3 from "@/components/sections/home4/Section3";
import Section4 from "@/components/sections/home4/Section4";
import Section5 from "@/components/sections/home4/Section5";
import Section6 from "@/components/sections/home4/Section6";
import Section7 from "@/components/sections/home4/Section7";
import Section8 from "@/components/sections/home4/Section8";
import Section9 from "@/components/sections/home4/Section9";
import Section10 from "@/components/sections/home4/Section10";
import FAQ from "@/components/sections/home4/FAQ";
import Portfolio from "@/components/sections/home4/portfolio";
import Office from "@/components/sections/home4/Office";
import Review from "@/components/sections/home4/Review";
import Services from "@/components/sections/home4/Services";
import Industry from "@/components/sections/home4/Industry";
export default function Home4() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={4} logoWhite>
        <Section1 />
        {/* <Review /> */}
        {/* <Section2 /> */}
        <Section3 />
        <Services />
        <Industry />
        <Section5 />
        <Portfolio />
        {/* <FAQ /> */}
        <Office />
        {/* <Section6 /> */}
        {/* <Section7 /> */}
        {/* <Section8 /> */}
        <Section9 />
        <Section10 />
      </Layout>
    </>
  );
}
