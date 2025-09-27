import React from 'react'

function Filter({ cardSelected, setCardSelected }) {
  return (
    <div className='mb-0'>
      <ul
        style={{ background: "#1d2026" }}
        className='d-flex align-items-center justify-content-center flex-wrap mt-5 py-5 gap-5 h-100 w-100 mb-1'
      >

         <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("")}
          >
            Show All
          </button>
        </li>

        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "executive-director" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("executive-director")}
          >
            Executive Director
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "finance-manager" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("finance-manager")}
          >
            Finance Manager
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "executive-manager" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("executive-manager")}
          >
            Executive Manager
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "field-executive" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("field-executive")}
          >
            Field Executives
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "Supervisor" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("Supervisor")}
          >
            Supervisor
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "housekeeping-boys" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("housekeeping-boys")}
          >
            Housekeeping Boys
          </button>
        </li>
        
        
      </ul>
    </div>
  )
}

export default Filter