import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import Values from "@/components/Values";
import React from "react";
import clsx from "clsx";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import Tensile from "@/components/tensile";
import Metal from "@/components/metal";
import Ceramic from "@/components/ceramic";
import Polycarbonate from "@/components/polycarbonate";
import ScrollToTop from "@/components/ScrollToTop";

const ProcessPage = () => {
  return (
    <>
      <PageIntro 
      centered="1"
        eyebrow=""
        title="Arif Shed Works"
      >
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="Tensile" label="strong and flexible" />
          <StatListItem value="Metal" label="Ideal for robust conditions" />
          <StatListItem value="Ceramic" label="Excellent Insulation" />
          <StatListItem value="Polycarbonate" label="Lightweight" />
        </StatList>
      
      </Container>
      <FadeIn className={clsx("text-center")} >
        <Button
          className="mt-14 bg-green-500 hover:underline hover:bg-green-600 text-bold "
          target="_blank" 
            href="https://ariffabrications.arifgroup.in">
              Click to See Full Catalogue
          </Button>
          </FadeIn>
          <Tensile/>
          <Metal/>
          <Ceramic/>
          <Polycarbonate/>      <ContactSection />
          <ScrollToTop/>
    </>
  );
};

export default ProcessPage;
