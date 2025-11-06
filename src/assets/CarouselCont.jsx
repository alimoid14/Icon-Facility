import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { Link } from "react-router-dom";

function CarouselCont({ displaybut, imgsrc, smalltxt, bigtxt1, bigtxt2 }) {
  return (
    <>
      <section
        className="carousel w-full mt-3 flex flex-col items-center justify-center text-center"
        style={{
          minHeight: "70vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imgsrc})`,
          backgroundSize: "cover",
          boxShadow: "#333",
          backgroundPosition: "center",
        }}
        role="banner"
      >
        <p style={{ color: "#f7d32d" }}>{smalltxt} </p>
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          {bigtxt1}
          <br />
          {bigtxt2}
        </h1>
        <Link
          to="/services"
          style={
            displaybut === "none"
              ? { display: "none" }
              : {
                  textDecoration: "none",
                  backgroundColor: "#4294e1",
                  color: "#fff",
                  padding: ".5% 1%",
                  borderRadius: "5%",
                }
          }
        >
          Services
        </Link>
      </section>
    </>
  );
}

export default CarouselCont;
