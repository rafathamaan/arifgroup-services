import PageIntro from "@/components/PageIntro";
import React from "react";
import Ssaccessories from "@/components/ssaccessories";
import Sspipes from "@/components/sspipes";
import Cnc from "@/components/cnc";

const WorkPage = () => {
  return (
    <>
      <PageIntro centered='0'
        eyebrow="SS Pipes and Tubes"
        title="Arif Metal Sales."
      >
      </PageIntro>
      <Sspipes/>
    </>
  );
};

export default WorkPage;
