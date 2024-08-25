import Image from "next/image";
import a from "src/images/ssrailings/1.jpeg";
import b from "src/images/ssrailings/2.jpeg";
import c from "src/images/ssrailings/3.jpeg";
import d from "src/images/ssrailings/4.jpeg";
import e from "src/images/ssrailings/5.jpeg";
import f from "src/images/ssrailings/6.jpeg";
import g from "src/images/ssrailings/7.jpeg";
import h from "src/images/ssrailings/8.jpeg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";
import Button from "./Button";


const ssrailings = [
  ["a", a],
  ["b", b],
  ["c", c],
  ["d", d],
  ["e", e],
  ["f", f],
  ["g", g],
  ["h", h],
 
];

 
const Ssrailings = () => {
  return (
    <div className="mt-10 rounded-4xl bg-neutral-950 py-20 sm:mt-12 sm:py-22 text-center lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-3xl font-semibold tracking-wider text-white sm:text-left">
           Stainless Steel Railings
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4  "
          >
            {ssrailings.map(([ssrailings, logo]) => (
              <li key={ssrailings}>
                <FadeIn>
                  <Image src={logo} alt={ssrailings} unoptimized />
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

export default Ssrailings;

