import Image from "next/image";
import a from "src/images/ceramic/1.jpeg";
import b from "src/images/ceramic/2.jpeg";
import c from "src/images/ceramic/3.jpeg";
import d from "src/images/ceramic/4.jpeg";
import e from "src/images/ceramic/5.jpeg";
import f from "src/images/ceramic/6.jpeg";
import g from "src/images/ceramic/7.jpeg";
import h from "src/images/ceramic/8.jpeg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";
import Button from "./Button";


const ceramic= [
  ["a", a],
  ["b", b],
  ["c", c],
  ["d", d],
  ["e", e],
  ["f", f],
  ["g", g],
  ["h", h],
 
];

const Ceramic = () => {
  return (
    <div className="mt-10 rounded-4xl bg-neutral-950 py-20 sm:mt-12 sm:py-22 text-center lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-wider text-white sm:text-left">
            Ceramic Sheds
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4  "
          >
            {ceramic.map(([ceramic, logo]) => (
              <li key={ceramic}>
                <FadeIn>
                  <Image src={logo} alt={ceramic} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
          <Button
          className="mt-14 bg-blue-600 hover:underline hover:bg-green-600 text-bold "
          target="_blank" 
            href="https://ariffabrications.arifgroup.in">
              Click to See Full Catalogue
          </Button>
        </FadeInStagger>
        
      </Container>
    </div>
  );
};

export default Ceramic;

