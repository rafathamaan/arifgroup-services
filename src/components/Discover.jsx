import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Assess & Plan" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        We start by closely assessing the project requirements, taking precise measurements and understanding the scope of work. Our team prepares detailed <strong className="font-semibold text-neutral-950">quotations</strong> tailored to various quality options, allowing our clients to choose what best suits their needs.
          </p>
        <p>
        Once the quality is selected, we provide a comprehensive project timeline and communicate all essential details to ensure transparency. {" "}
          <strong className="font-semibold text-neutral-950">Our commitment to quality over profit</strong> is evident in everything we do. 
        </p>
        <p>
        we even provide <strong className="font-semibold text-neutral-950">a sample metal</strong> piece before starting the work, so you can compare the final product to ensure it meets the same high standards.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Detailed site measurements</TagListItem>
        <TagListItem>Customized quotations for multiple quality options</TagListItem>
        <TagListItem>Clear communication and timeline setup</TagListItem>
        <TagListItem>Quality consultation</TagListItem>
        <TagListItem>Sample metal piece for quality comparison</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
