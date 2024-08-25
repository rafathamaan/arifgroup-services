import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logolight from "/public/light.png";
import Certificates from "@/components/Certificates";
import PageIntro from "@/components/PageIntro";
import Image from "next/image";
import glass from "src/images/glasstypes.png"
import Cultures from "@/components/Cultures";
import Discover from "@/components/Discover";
import Build from "@/components/Build";
import Deliver from "@/components/Deliver";
import Button from "@/components/Button";
import clsx from "clsx";
import ScrollToTop from "@/components/ScrollToTop";



export default function Home() {
  return (
    
    <main className="text-black  ">
      
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          More than 39 Years of Experience

          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          From Sales to After-Sales Service, we ensure that your Projects are completed on Time, within Budget, and to the Highest Quality Standards of the Market.
          </p>
          <Button
          className="mt-14 bg-blue-600 text-bold hover:bg-green-400 hover:text-white "
          target="_blank" 
            href="https://www.arifgroup.in">
              Click to See Our Full Catalogue
          </Button>
        </FadeIn>
      </Container>
      <Clients />
      <Services />
      <PageIntro
      title="Authentic & Certified Business"
      centered>
      </PageIntro>
      <Certificates/>
      <PageIntro centered
      eyebrow="We only use High Quality Toughened Glass for Strength and Safety"
      title="Toughened Glass"
      ><p> TOUGHENED Glass is  {" "}
      <strong className="font-bold text-black ">&apos; 4 X Stronger &apos;</strong>   than normal glass of the same size and thickness.</p>
      
      </PageIntro>
      <FadeIn>
                  <Image className="mt-5 sm:mt-5 lg:mt-5 " src={glass} unoptimized />
                </FadeIn>
                <Cultures />
                <PageIntro centered
      eyebrow="Our Process"
      title="How we work"
      ><p> From Design till Delivery</p>
      
      </PageIntro>
                <div className="mt-20 space-y-24 [counter-reset:section] sm:mt-20 sm:space-y-32 lg:mt-20 lg:space-y-40">
        {/* Discover */}
        <Discover/>
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
                <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40 "
        client={{ name: "logolight", logo: logolight ,logoStyle: { width: 50 } }}
      >At Arif Group, we specialize in providing Top-notch Metal Fabrication, Furniture Manufacturing, Shed-Works, and Comprehensive Interior and Exterior Services. Whether you&apos;re looking for High-Quality products or expert solutions, our experienced team is extremely dedicated to meeting all your needs with excellence and precision.
      </Testimonials>
      <ScrollToTop/>
      <ContactSection />
      
    </main>
  );
}
