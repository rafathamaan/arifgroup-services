import React from "react";
import Section from "./Section";
import design from "@/images/design.jpg";
import Blockquote from "./Blockquote";
import { TagList, TagListItem } from "./TagList";

const Build = () => {
  return (
    <Section title="Design & Manufacture" image={{ src: design, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Upon approval, we secure the necessary raw materials and assign a dedicated team to your project. Our skilled craftsmen then <strong className="font-semibold text-neutral-950">design, develop, and manufacture</strong> gates, railings, grills, or other required structures with precision.
        </p>
        <p>
        Every piece is produced in our state-of-the-art facility, where it undergoes rigorous quality checks and priming to ensure the highest standards of durability and finish.<strong className="font-semibold text-neutral-950">Our focus on quality ensures that every product is built to last.</strong> 
        </p>
       
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Raw material procurement</TagListItem>
        <TagListItem>Skilled workforce assignment</TagListItem>
        <TagListItem>Precision design and development</TagListItem>
        <TagListItem>Strict quality checks and priming</TagListItem>
      </TagList>
  
    </Section>
  );
};

export default Build;
