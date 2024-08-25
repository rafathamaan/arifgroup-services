import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Crafting Excellence with Balance."
        invert
      >
        <p>
          We are a group of like-minded Professionals who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Unwavering Commitment" invert>
           We’re not just a team, we’re a family, dedicated to excellence in every project we undertake.

          </GridListItem>
          <GridListItem title="Empathy and Understanding" invert>
           We believe in supporting our team members, knowing that when they thrive, our business thrives. A positive environment is the key to our collective success.
          </GridListItem>
          <GridListItem title="Relentless Dedication" invert>
           Our work isn’t just what we do—it’s who we are. We put our heart into every task, ensuring that our passion for quality shines through.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
