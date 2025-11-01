import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { Link } from "react-router-dom";

function CarouselCont({ displaybut, imgsrc, smalltxt, bigtxt1, bigtxt2 }) {
  return (
    <>
      <div
        className="carousel w-full  mt-3 "
        style={{
          minHeight: "70vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${imgsrc})`,
          backgroundSize: "cover",
          boxShadow: "#333",
          backgroundPosition: "center",
        }}
      >
        <h6 style={{ color: "#f7d32d" }}>{smalltxt} </h6>
        <h2 style={{ color: "#fff", textAlign: "center" }}>
          {bigtxt1}
          <br />
          {bigtxt2}
        </h2>
        <div
          style={
            displaybut === "none"
              ? { display: "none" }
              : {
                  backgroundColor: "#4294e1",
                  color: "#fff",
                  padding: ".5% 1%",
                  borderRadius: "5%",
                }
          }
        >
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Services
          </Link>
        </div>
      </div>
    </>
  );
}

export default CarouselCont;
