import { Helmet } from "react-helmet";
import CarouselCont from "../assets/CarouselCont";
import About from "../assets/HomeSpecifiedComp/About";
import ContactSec from "../assets/HomeSpecifiedComp/ContactSec";
import HomeOpt from "../assets/HomeSpecifiedComp/HomeOpt";
import HomeService from "../assets/HomeSpecifiedComp/HomeService";
import Map from "../assets/HomeSpecifiedComp/Map";
import Project from "../assets/HomeSpecifiedComp/Project";
import NavDown from "../assets/NavDown";
import ExampleCarouselImage from "../assets/pics/ExampleCarouselImage.jpg";

function Home() {
  const pageTitle = "ICON Facility | Industrial Cleaning & Maintenance Experts";
  const pageDesc =
    "ICON Facility delivers professional industrial cleaning and facility management solutions across India — making your business shine since 1989.";
  const heroImg = ExampleCarouselImage;
  // const pageUrl = "https://yourdomain.com/";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta
          name="keywords"
          content="ICON Facility, cleaning services, industrial maintenance, facility management, housekeeping, industrial cleaning"
        />
        <meta name="robots" content="index, follow" />

        {/* Preload Hero Image (Improves LCP) */}
        <link rel="preload" as="image" href={heroImg} />

        {/* Canonical URL */}
        {/* Update after hosting: <meta name="canonical" content={pageUrl} /> */}

        {/* Open Graph (Facebook, LinkedIn, WhatsApp, etc.) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={heroImg} />
        <meta property="og:type" content="website" />
        {/*Update after hosting {<meta property="og:url" content={pageUrl} />} */}

        {/* Twitter Card (Twitter / X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={heroImg} />
      </Helmet>

      <NavDown
        homeact="active-link"
        aboutact=""
        contactact=""
        serviceact=""
        projectact=""
        teamAct=""
      />
      <CarouselCont
        displaybut="block"
        imgsrc={ExampleCarouselImage}
        smalltxt="The Best Cleaning Contracts "
        bigtxt1="The Kleaner is to make"
        bigtxt2="your business shine."
      />
      <HomeOpt />
      <HomeService />
      <Project />
      <About />
      <ContactSec />
      <Map />
    </>
  );
}

export default Home;
