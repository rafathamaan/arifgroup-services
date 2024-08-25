import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";
import { TagList, TagListItem } from "./TagList";

const Deliver = () => {
  return (
    <Section title="Deliver & Install" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Once the product is ready, we handle the transportation to your project site. Our experienced installation team ensures that the product is fitted with care, meeting all project specifications.
        </p>
        <p>
        We complete the work with thorough checks and make any <strong className="font-semibold text-neutral-950">necessary adjustments</strong> to meet client satisfaction. By providing a sample metal piece at the outset, we ensure that you can trust the quality of the final product—confirming that what we promised is exactly what you received.
        </p>

      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Safe and timely transportation</TagListItem>
        <TagListItem>Professional installation and fitting</TagListItem>
        <TagListItem>Final quality checks and adjustments</TagListItem>
        <TagListItem>Customer satisfaction guarantee</TagListItem>
        <TagListItem>Quality verification through comparison with sample metal piece</TagListItem>
      </TagList>
      
    </Section>
  );
};

export default Deliver;
