import { Helmet } from "react-helmet";
import CarouselCont from "../assets/CarouselCont";
import About from "../assets/HomeSpecifiedComp/About";
import ContactSec from "../assets/HomeSpecifiedComp/ContactSec";
import HomeOpt from "../assets/HomeSpecifiedComp/HomeOpt";
import HomeService from "../assets/HomeSpecifiedComp/HomeService";
import Map from "../assets/HomeSpecifiedComp/Map";
import Project from "../assets/HomeSpecifiedComp/Project";
import NavDown from "../assets/NavDown";
import ContactFormPopup from "../assets/ContactFormPopup";
import ExampleCarouselImage from "../assets/pics/ExampleCarouselImage.jpg";

function Home() {
  return (
    <>
      <Helmet>
        <title>ICON Facility</title>
        <meta name="description" content="The Best Cleaning Contracts" />
      </Helmet>
      <ContactFormPopup />
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
