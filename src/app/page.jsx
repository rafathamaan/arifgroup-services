import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logolight from "/public/light.png";
import Certificates from "@/components/Certificates";
import Cnc from "@/components/cnc";
import Ssaccessories from "@/components/ssaccessories"; 
import Sspipes from "@/components/sspipes"
import Particles from "@/components/particles";


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
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40 "
        client={{ name: "logolight", logo: logolight ,logoStyle: { width: 50 } }}
      >At Arif Group, we specialize in providing Top-notch Metal Fabrication, Furniture Manufacturing, Shed-Works, and Comprehensive Interior and Exterior Services. Whether you’re looking for High-Quality products or expert solutions, our experienced team is extremely dedicated to meeting all your needs with excellence and precision.
       
      </Testimonials>
      <Services />
      <Certificates/>
      <Cnc/>
      <Ssaccessories/>
      <Sspipes/>
      <ContactSection />
      
    </main>
  );
}
