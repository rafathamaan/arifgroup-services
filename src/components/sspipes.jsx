import Image from "next/image";
import a from "src/images/sspipes/1.jpeg";
import b from "src/images/sspipes/2.jpeg";
import c from "src/images/sspipes/3.jpeg";
import d from "src/images/sspipes/4.jpeg";
import e from "src/images/sspipes/5.jpeg";
import f from "src/images/sspipes/6.jpeg";
import g from "src/images/sspipes/7.jpeg";
import h from "src/images/sspipes/8.jpeg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";


const sspipes = [
  ["a", a],
  ["b", b],
  ["c", c],
  ["d", d],
  ["e", e],
  ["f", f],
  ["g", g],
  ["h", h],
 
];

const Sspipes = () => {
  return (
    <div className="mt-10 rounded-4xl bg-neutral-950 py-20 sm:mt-12 sm:py-22 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-2xl font-semibold tracking-wider text-white sm:text-left">
          Stainless-Steel Pipes and Tubes
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4  "
          >
            {sspipes.map(([sspipes, logo]) => (
              <li key={sspipes}>
                <FadeIn>
                  <Image src={logo} alt={sspipes} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
          <a
  href="https://arifmetal.arifgroup.in"
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

export default Sspipes;

