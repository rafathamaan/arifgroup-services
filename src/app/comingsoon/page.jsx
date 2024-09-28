import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import React from "react";

const ComingSoon = () => {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
      <FadeIn className="flex flex-col items-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          Coming Soon
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Stay Tuned
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          
        </p>
        <Link
          href="/contact"
          className="mt-4 text-l  font-semibold text-blue-600 transition hover:text-green-600"
        >
          Go Back
        </Link>
      </FadeIn>
    </Container>
  );
};

export default ComingSoon;