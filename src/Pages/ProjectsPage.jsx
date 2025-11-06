import { Helmet } from "react-helmet";
import CarouselCont from "../assets/CarouselCont";
import Project from "../assets/HomeSpecifiedComp/Project";
import NavDown from "../assets/NavDown";
import office_cleaning from "../assets/pics/office_cleaning.jpg";

function ProjectsPage() {
  const pageTitle = "Projects | ICON Facility";
  const pageDesc =
    "Explore our latest industrial cleaning and facility management projects — from warehouses to offices, ICON Facility delivers excellence across every site.";
  const heroImg = office_cleaning;
  // const pageUrl = "https://yourdomain.com/projects";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta
          name="keywords"
          content="ICON Facility projects, cleaning projects, industrial cleaning work, facility management examples, office cleaning, warehouse cleaning"
        />
        <meta name="robots" content="index, follow" />

        {/* Preload Hero Image */}
        <link rel="preload" as="image" href={heroImg} />

        {/* Canonical URL */}
        {/* Upload after hosting: <link rel="canonical" href={pageUrl} /> */}

        {/* Open Graph (Social SEO) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={heroImg} />
        <meta property="og:type" content="website" />
        {/* Upload after hosting: <meta property="og:url" content={pageUrl} /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={heroImg} />
      </Helmet>
      <NavDown
        homeact=""
        aboutact=""
        contactact=""
        serviceact=""
        projectact="active-link"
        teamAct=""
      />
      <CarouselCont
        displaybut="none"
        imgsrc={office_cleaning}
        smalltxt="Selection of our work"
        bigtxt1="Latest Projects"
        bigtxt2=""
      />
      <Project />
    </>
  );
}

export default ProjectsPage;
