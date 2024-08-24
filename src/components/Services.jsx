import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imagegrade from "../images/imagegrade.jpg";
import imageguage from "../images/laptop.jpg";
import List, { ListItem } from "./List";
import Image from "next/Image"
import Certificates from "./Certificates";
const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title=" Premium Stainless Steel Solutions:"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
      Offering a wide range of grades and gauges to meet your needs in durability, corrosion resistance, and aesthetic appeal.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imagegrade}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="304 Grade">
            The most versatile and widely used stainless steel. It has excellent forming and welding characteristics, along with strong corrosion resistance.<br/><br/>
            Ideal for architectural features, handrails, cladding, and structural components that require corrosion resistance and a sleek finish. It’s widely used in building facades, roofing, and decorative elements.
            </ListItem>
            <ListItem title="202 Grade">
            A cost-effective alternative to 304, with good corrosion resistance and toughness. It contains lower nickel content, which makes it slightly less corrosion-resistant but more economical.<br/><br/>
            Often used in budget-conscious construction projects, Great for budget-friendly options like interior partitions, railings, and decorative trim.
            </ListItem>
            <ListItem title="316 Grade">
            Known for its enhanced resistance to corrosion, particularly against chlorides and industrial solvents. It’s stronger than 304 and is often used in more demanding environments.<br/><br/>
            Best for coastal or high-moisture areas, perfect for exterior fixtures, outdoor kitchens, and marine-related structures.
            </ListItem>
          </List>
        </div>
      </Container>
      <SectionIntro
      eyebrow="Stainless Steel, Iron, and Galvanised Iron (GI)"
        title="Guages We Offer"
      className="mt-24 sm:mt-32 lg:mt-40 "
      >
        <p>
        •  Square Bars
        •  Rectangular Bars
        •  Flat Sheets
        •  Round Bars
        </p>
      </SectionIntro>
      <Container className="">
        <div className="lg:flex lg:items-center lg:justify-end">
          
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="14 Guage (2.0mm)">
            Thick and robust, used in structural supports, heavy-duty enclosures, and other high-stress environments.
            </ListItem>
            <ListItem title="16 Guage (1.5mm)">
            Provides increased durability and strength, suitable for heavy-duty applications like structural components, enclosures, and industrial equipment.
            </ListItem>
            <ListItem title="18 Guage (1.2mm)">
            Offers a balance between strength and weight, commonly used in kitchen sinks, countertops, and decorative panels.
            </ListItem>
            <ListItem title="20 Guage (0.9mm)">
            Thin and flexible, ideal for applications requiring light-weight material with moderate strength structures.
            </ListItem>
          </List>
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageguage}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end lg:ml-5"
              />
            </FadeIn>
          </div>
          
        </div>
      </Container>
      <SectionIntro
        eyebrow="Services"
        title=" Premium Galvanised Iron Solutions:"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We offer high-quality Galvanized Iron (GI) materials, known for their exceptional corrosion resistance and durability.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imagegrade}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="What is Galvanised Iron (GI)?">
            <br/>• GI is an ideal choice for roofing, structural framing, and exterior applications in residential construction. Our GI products ensure log-lasting protection against rust, making them a reliable option for regions with high moisture levels. Available in various gauges and dimensions, our GI materials are designed to meet diverse construction needs while providing excellent value for your investment.
            </ListItem>
            <ListItem title="Advantages"><br/> 
            •	Corrosion Resistance: GI is coated with zinc, providing superior protection against rust and weathering.<br/>
	•	Durability: With proper installation, GI materials can last for decades, reducing maintenance costs.<br/>
	•	Cost-Effective: GI offers a balance between strength and affordability, making it an economical choice for many construction projects.
            </ListItem>
            <ListItem title="Disadvantages">
            <br/> • Weight: GI is relatively heavier than some other materials, which might require stronger support structures.<br/>
	•	Limited Aesthetic Options: While functional, GI may lack the aesthetic appeal of more decorative materials like stainless steel.
            </ListItem>
          </List>
        </div>
      </Container>
    
    </>
  );
};

export default Services;
