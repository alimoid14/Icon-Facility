import { Helmet } from "react-helmet";
import CarouselCont from "../assets/CarouselCont";
import About from "../assets/HomeSpecifiedComp/About";
import NavDown from "../assets/NavDown";
import warehouse_cleaning from "../assets/pics/warehouse_cleaning.jpg";

function AboutPage() {
  const pageTitle = "About Us | Icon-Facility";
  const pageDesc =
    "Learn more about Icon-Facility — providing trusted industrial and facility cleaning services since 1989.";
  const heroImg = warehouse_cleaning; // hero banner
  return (
    <>
      <Helmet>
        {/*BASIC SEO*/}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta
          name="keywords"
          content="Icon Facility, cleaning services, industrial maintenance, about us, facility management"
        />
        <meta name="robots" content="index, follow" />
        {/* Preload Hero Banner for faster LCP */}
        <link rel="preload" as="image" href={heroImg} />

        {/* Open Graph (Social SEO) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={heroImg} />
        <meta property="og:type" content="website" />
        {/* Update after hosting: <meta property="og:url" content="https://yourdomain.com/about" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={heroImg} />
      </Helmet>

      <NavDown
        homeact=""
        aboutact="active-link"
        contactact=""
        serviceact=""
        projectact=""
        teamAct=""
      />
      <CarouselCont
        displaybut="none"
        imgsrc={warehouse_cleaning}
        smalltxt="Providing services since 1989"
        bigtxt1="We're an Industrial"
        bigtxt2="Cleaning Company"
      />
      <About />
    </>
  );
}

export default AboutPage;
