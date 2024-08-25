import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import MyGoogleMaps from "@/components/GoogleMaps";
import MyGoogleMap from "@/components/GoogleMaps";
import PageIntro from "@/components/PageIntro";
import ScrollToTop from "@/components/ScrollToTop";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="" title="Contact Us">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-20 sm:mt-20 lg:mt-20">
      <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <ContactDetails />
          </div>
          <div className="mt-10 w-full lg:w-1/2">
            <MyGoogleMap />
          </div>
        </div>
        <ScrollToTop/>
      </Container>
     
    </>
  );
};

export default ContactPage;
