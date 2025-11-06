import { Helmet } from "react-helmet";
import CarouselCont from "../assets/CarouselCont";
import ContactForm from "../assets/ContactComp/ContactForm";
import NavDown from "../assets/NavDown";
import industrialcleaning from "../assets/pics/industrialcleaning.jpg";

function ContactPage() {
  const pageTitle = "Contact Us | ICON-Facility";
  const pageDesc =
    "Get in touch with ICON-Facility — call us or send an email to learn more about our professional cleaning and maintenance services.";
  const heroImg = industrialcleaning;
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta
          name="keywords"
          content="Icon Facility, contact, facility management, cleaning services, maintenance, customer support"
        />
        <meta name="robots" content="index, follow" />

        {/* Preload Hero Image for better LCP */}
        <link rel="preload" as="image" href={heroImg} />

        {/* Open Graph (for Facebook, LinkedIn, WhatsApp, etc.) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={heroImg} />
        <meta property="og:type" content="website" />
        {/* Update after hosting: <meta property="og:url" content="https://yourdomain.com/contact" />}

        {/* Twitter Card (for X / Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={heroImg} />
      </Helmet>
      <NavDown
        homeact=""
        aboutact=""
        contactact="active-link"
        serviceact=""
        projectact=""
        teamAct=""
      />
      <CarouselCont
        displaybut="none"
        imgsrc={industrialcleaning}
        smalltxt="Contact us"
        bigtxt1="Send us an email"
        bigtxt2="Or Call us."
      />
      <ContactForm />
    </>
  );
}

export default ContactPage;
