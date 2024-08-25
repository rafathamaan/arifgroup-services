import Beds from "@/components/beds";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Diningtables from "@/components/diningtables";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import ScrollToTop from "@/components/ScrollToTop";
import Sofaset from "@/components/sofaset";
import { StatList, StatListItem } from "@/components/StatList";
import clsx from "clsx";

const BlogPage = () => {
  return (
    <>
      <PageIntro centered eyebrow="" title="Arif Furniture Factory">
        <p>
          High-Quality Stainless Steel & Glass Furniture
        </p>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
        <StatListItem value=" Beds" label=" King - Queen - Foldable" />

          <StatListItem value="Dining Table" label="4 Seater - 6 Seater" />
          
          <StatListItem value="Sofa-Set" label="4 Seater - Sofa Bed" />
          <StatListItem value="Swings" label="Designer - With Roof" />
         
        </StatList>
        <FadeIn className={clsx("text-center")} >
        <Button
          className="mt-14 hover:underline hover:bg-green-500 bg-blue-500 text-bold "
          target="_blank" 
            href="https://www.arifgroup.in">
              Click to See Full Catalogue
          </Button>
          </FadeIn>
        
        
      </Container>
      <Beds/>
        <Diningtables/>
        <Sofaset/>
        <ScrollToTop/>
    </>
  );
};

export default BlogPage;
