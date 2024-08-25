import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";
import Ssgates from "@/components/Ssgates";
import Gigates from "@/components/gigates";
import Ssrailings from "@/components/Ssrailings";
import Girailings from "@/components/Girailings";
import Glassrailings from "@/components/Glassrailings";
import Grills from "@/components/grills";
import Button from "@/components/Button";
import clsx from "clsx";
import FadeIn from "@/components/FadeIn";


const AboutPage = () => {
  return (
    <>
      <PageIntro centered eyebrow="" title="Arif Fabrication Works">
        <p >
           In Business Since 1985 <br/>
        </p>
      </PageIntro>
      
      <Container className="mt-16">
        <StatList>
          <StatListItem value="Gates" label="Stainless Steel - Iron - GI - Aluminium" />
          <StatListItem value="Railings" label="Glass - Stainless Steel - Iron - GI" />
          <StatListItem value="Grills" label="Stainless Steel -  Iron  - GI - Glass" />
          
        </StatList>
        <FadeIn className={clsx("text-center")} >
        <Button
          className="mt-14 hover:underline hover:bg-green-500 bg-blue-500 text-bold "
          target="_blank" 
            href="https://www.arifgroup.in">
              Click to See Full Catalogue
          </Button>
          </FadeIn>
        
        
      </Container>
      <Ssgates/>
        <Gigates/>
        <Ssrailings/>
        <Girailings />
        <Glassrailings/>
        <Grills/>
        <ContactSection />
    </>
  );
};

export default AboutPage;
