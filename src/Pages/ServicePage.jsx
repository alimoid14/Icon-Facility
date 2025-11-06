import { Helmet } from "react-helmet";
import CarouselCont from "../assets/CarouselCont";
import HomeService from "../assets/HomeSpecifiedComp/HomeService";
import NavDown from "../assets/NavDown";
import high_access_cleaning from "../assets/pics/high_access_cleaning.jpg";

function ServicePage() {
  const pageTitle = "Services | ICON Facility";
  const pageDesc =
    "Discover our professional cleaning and facility management services — from industrial cleaning to high-access maintenance, ICON Facility ensures spotless results.";
  const heroImg = high_access_cleaning;
  // const pageUrl = "https://yourdomain.com/services";
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta
          name="keywords"
          content="ICON Facility services, industrial cleaning, commercial cleaning, facility management, high access cleaning, maintenance services, janitorial solutions"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        {/* <link rel="canonical" href={pageUrl} /> */}

        {/* Preload Hero Image */}
        <link rel="preload" as="image" href={heroImg} />

        {/* Open Graph (Social SEO) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={heroImg} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content={pageUrl} /> */}

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={heroImg} />
      </Helmet>
      <NavDown
        homeact=""
        aboutact=""
        contactact=""
        serviceact="active-link"
        projectact=""
        teamAct=""
      />
      <CarouselCont
        displaybut="none"
        imgsrc={high_access_cleaning}
        smalltxt="Professional Cleaning "
        bigtxt1="Our Services"
        bigtxt2=""
      />
      <HomeService />
    </>
  );
}

export default ServicePage;
