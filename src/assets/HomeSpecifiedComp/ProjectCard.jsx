import React from 'react'

function ProjectCard({imgurl,ser,loc}) {
  return (
    <>
    <div  className="card-body h-55 d-flex align-items-center justify-content-center flex-column text-center"
                  style={{
                    backgroundImage: `url(${imgurl})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h5 className="card-title" style={{ color: "#f7d32d" }}>
                    {ser}
                  </h5>
                  <h3 style={{ color: "#fff" }}>{loc}</h3>
                </div>
    </>
  )
}

export default ProjectCard