import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
  BsWhatsapp,
  BsPhone,
  BsTelephoneInbound,
  BsTelephone,
} from "react-icons/bs";



export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "/comingsoon",
    icon: BsYoutube,
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/9394098658?text=Hello!%20I've%20seen%20your%20website%20and%20I'm%20interested%20in%20your%20service.",
    icon: BsWhatsapp,
  },
  {
    title: "Phone",
    href: "tel:9394098658",
    icon: BsTelephone,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-blue-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
