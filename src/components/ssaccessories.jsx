import Image from "next/image";
import a from "src/images/ssaccessories/1.jpeg";
import b from "src/images/ssaccessories/2.jpeg";
import c from "src/images/ssaccessories/3.jpeg";
import d from "src/images/ssaccessories/4.jpeg";
import e from "src/images/ssaccessories/5.jpeg";
import f from "src/images/ssaccessories/6.jpeg";
import g from "src/images/ssaccessories/7.jpeg";
import h from "src/images/ssaccessories/8.jpeg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";
import Button from "./Button";


const ssaccessories = [
  ["a", a],
  ["b", b],
  ["c", c],
  ["d", d],
  ["e", e],
  ["f", f],
  ["g", g],
  ["h", h],
 
];

const Ssaccessories = () => {
  return (
    <div className="mt-10 text-center rounded-4xl bg-neutral-950 py-20 sm:mt-12 sm:py-22 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-wider text-white sm:text-left">
          Stainless-Steel Accessories & Fittings
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4  "
          >
            {ssaccessories.map(([ssaccessories, logo]) => (
              <li key={ssaccessories}>
                <FadeIn>
                  <Image src={logo} alt={ssaccessories} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
          <Button className={"bg-blue-500 text-bold mt-10 text-xl hover:bg-green-500 hover:underline "} href={"https://ariffabrications.arifgroup.in"}target="_blank" >
            Click to Open Catalogue
          </Button>
        </FadeInStagger>
        
      </Container>
    </div>
  );
};

export default Ssaccessories;

