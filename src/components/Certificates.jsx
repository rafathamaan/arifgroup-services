import Image from "next/image";
import logoBrightPath from "../images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "../images/certificates/trade.png";
import logoGreenLife from "../images/clients/green-life/logo-light.svg";
import logoHomeWork from "../images/clients/home-work/logo-light.svg";
import logoMailSmirk from "../images/certificates/gst.png";
import logoNorthAdventures from "../images/clients/north-adventures/logo-light.svg";
import logoPhobiaLight from "../images/certificates/fire.png";
import logoUnseal from "../images/certificates/labour.png";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const certificates = [
  ["Phobia", logoPhobiaLight],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
 
];

const Certificates = () => {
  return (
    <div className="mt-10 bg-neutral-950 rounded-4xl  py-20 sm:mt-12 sm:py-22 lg:mt-36">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          {/* <h2 className="text-center font-display text-2xl font-semibold tracking-wider text-white  sm:text-left">
            We are Ceritified
          </h2>
          <div className="h-px flex-auto bg-neutral-800" /> */}
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4  "
          >
            {certificates.map(([certiificates, logo]) => (
              <li key={certificates}>
                <FadeIn>
                  <Image src={logo} alt={certificates} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Certificates;

