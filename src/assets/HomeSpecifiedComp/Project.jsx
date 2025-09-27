import React from "react";
import centrallix_air from "../pics/centrallix_air.jpeg";
import "./Project.css";
import indust from '../pics/indust.jpeg'
import ProjectCard from "./ProjectCard";
import grand_hotel from "../pics/grand_hotel.jpg"

function Project() {
  return (
    <>
      <div
        className="box w-full bg-dark d-flex align-items-center justify-content-center flex-column "
        style={{ backgroundColor: "#1d2026", minHeight: "45vh", color: "#fff",padding:"2% 0" }}
      >
        <h5 className="mt-5" style={{ color: "#f7d32d" }}>Our Latest</h5>
        <h2>Cleaning Projects</h2>

        <div className="projects  d-flex flex-wrap my-4 mb-5 align-items-center justify-content-center gap-5">

          <div className="card2 bg-base-100 image-full w-96 shadow-sm d-flex flex-row ">
            <ProjectCard imgurl={centrallix_air} ser="Aviation Cleaning" loc="Centralix Airport"/>        
            
          </div>
          <div className="card2 bg-base-100 image-full w-96 shadow-sm d-flex flex-row ">
            <ProjectCard imgurl={indust} ser="Industrial Cleaning" loc="Manufacturer Floor"/>            
            
          </div>

          <div className="card2 bg-base-100 image-full w-96 shadow-sm d-flex flex-row ">
            <ProjectCard imgurl={grand_hotel} ser="Contract Cleaning" loc="Empire Grand Hotel"/>            
            
          </div>


        </div>

        <button className="mb-5" style={{border:"1px solid #fff",padding:".5%"}}>View Projects</button>


      </div>
    </>
  );
}

export default Project;
