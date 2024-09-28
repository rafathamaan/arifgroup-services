import Image from "next/image";
import a from "src/images/sspipes/1.jpeg";
import b from "src/images/sspipes/2.jpeg";
import c from "src/images/sspipes/3.jpeg";
import d from "src/images/sspipes/4.jpeg";

import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";
import Button from "./Button";


const sspipes = [
  ["a", a],
  ["b", b],
  ["c", c],
  ["d", d],
  
 
];

const Sspipes = () => {
  return (
    <div className="mt-10 rounded-4xl bg-neutral-950 py-20 text-center sm:mt-12 sm:py-22 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-wider sm:text-left">
         Metal Pipes
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
          <Button className={"bg-blue-500 text-bold mt-10 text-xl hover:bg-green-500 hover:underline "} href={"https://ariffabrications.arifgroup.in"}target="_blank" >
            Click to Open Catalogue
          </Button>
        </FadeInStagger>
        
      </Container>
    </div>
  );
};

export default Sspipes;

