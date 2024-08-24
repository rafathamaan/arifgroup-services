import Image from "next/image";
import a from "src/images/cnc/1.jpeg";
import b from "src/images/cnc/2.jpeg";
import c from "src/images/cnc/3.jpeg";
import d from "src/images/cnc/4.jpeg";
import e from "src/images/cnc/5.jpeg";
import f from "src/images/cnc/6.jpeg";
import g from "src/images/cnc/7.jpeg";
import h from "src/images/cnc/8.jpeg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";


const Cnc = [
  ["a", a],
  ["b", b],
  ["c", c],
  ["d", d],
  ["e", e],
  ["f", f],
  ["g", g],
  ["h", h],
 
];

const cnc = () => {
  return (
    <div className="mt-10 rounded-4xl bg-neutral-950 py-20 sm:mt-12 sm:py-22 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-2xl font-semibold tracking-wider text-white sm:text-left">
            Cnc Cut Designs
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4  "
          >
            {Cnc.map(([Cnc, logo]) => (
              <li key={Cnc}>
                <FadeIn>
                  <Image src={logo} alt={Cnc} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
          <a
  href="https://ariffabrications.arifgroup.in"
  target="_blank"
  className={clsx("text-white underline font-display tracking-wider text-xl")}
><br/><br/>
  Click to View More Photos
</a>
        </FadeInStagger>
        
      </Container>
    </div>
  );
};

export default cnc;

