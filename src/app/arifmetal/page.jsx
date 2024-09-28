import PageIntro from "@/components/PageIntro";
import React from "react";
import Ssaccessories from "@/components/ssaccessories";
import Sspipes from "@/components/sspipes";
import Cnc from "@/components/cnc";
import Container from "@/components/Container";
import { StatList,StatListItem } from "@/components/StatList";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import clsx from "clsx";
import ScrollToTop from "@/components/ScrollToTop";

const WorkPage = () => {
  return (
    <>
      <PageIntro 
      centered="1"
        eyebrow=""
        title="Arif Metal Sales"
      >
        <p >
           Premium Quality<br/>
        </p>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="Stainless Steel" label="Pipes and Tubes • Accessories • Fittings" />
          <StatListItem value="Galvanised Iron" label="14 Guage • 16 Guage • 18 Guage • 20 Guage" />
          <StatListItem value="Aluminium" label="Pipes • Tubes" />
        </StatList>
        <FadeIn className={clsx("text-center")} >
        <Button
          className="mt-14 hover:underline hover:bg-green-500 bg-blue-500 text-bold "
          target="_blank" 
            href="https://arifmetal.arifgroup.in">
              Click to See Arif Metal Catalogue
          </Button>
          </FadeIn>
      </Container>
      <Ssaccessories/>
      <Cnc/>
      <Sspipes/>
      <ScrollToTop/>
      
      
    </>
  );
};

export default WorkPage;
