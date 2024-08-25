import Image from "next/image";
import a from "src/images/polycarbonate/1.jpeg";
import b from "src/images/polycarbonate/2.jpeg";
import c from "src/images/polycarbonate/3.jpeg";
import d from "src/images/polycarbonate/4.jpeg";
import e from "src/images/polycarbonate/5.jpeg";
import f from "src/images/polycarbonate/6.jpeg";
import g from "src/images/polycarbonate/7.jpeg";
import h from "src/images/polycarbonate/8.jpeg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";
import Button from "./Button";


const polycarbonate= [
  ["a", a],
  ["b", b],
  ["c", c],
  ["d", d],
  ["e", e],
  ["f", f],
  ["g", g],
  ["h", h],
 
];

const Polycarbonate = () => {
  return (
    <div className="mt-10 rounded-4xl bg-neutral-950 py-20 sm:mt-12 sm:py-22 text-center lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-wider text-white sm:text-left">
            Polycarbonate Sheds
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4  "
          >
            {polycarbonate.map(([polycarbonate, logo]) => (
              <li key={polycarbonate}>
                <FadeIn>
                  <Image src={logo} alt={polycarbonate} unoptimized />
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

export default Polycarbonate;

