import React from "react";

function Filter({ cardSelected, setCardSelected }) {
  return (
    <section className="mb-0" aria-labelledby="button-list">
      <ul
        id="button-list"
        style={{ background: "#1d2026" }}
        className="d-flex align-items-center justify-content-center flex-wrap mt-5 py-5 gap-5 h-100 w-100 mb-1"
      >
        <li style={{ overflow: "hidden" }}>
          <button
            type="button"
            className="btn btn-dark fw-bold"
            style={
              cardSelected === ""
                ? { background: "cadetblue" }
                : { border: "1px solid #fff" }
            }
            onClick={() => setCardSelected("")}
            aria-label="Select all button"
          >
            Show All
          </button>
        </li>

        <li style={{ overflow: "hidden" }}>
          <button
            type="button"
            className="btn btn-dark fw-bold"
            style={
              cardSelected === "executive-director"
                ? { background: "cadetblue" }
                : { border: "1px solid #fff" }
            }
            onClick={() => setCardSelected("executive-director")}
            aria-label="Select executive directors button"
          >
            Executive Director
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            type="button"
            className="btn btn-dark fw-bold"
            style={
              cardSelected === "finance-manager"
                ? { background: "cadetblue" }
                : { border: "1px solid #fff" }
            }
            onClick={() => setCardSelected("finance-manager")}
            aria-label="Select financial managers button"
          >
            Finance Manager
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            type="button"
            className="btn btn-dark fw-bold"
            style={
              cardSelected === "executive-manager"
                ? { background: "cadetblue" }
                : { border: "1px solid #fff" }
            }
            onClick={() => setCardSelected("executive-manager")}
            aria-label="Select executive managers button"
          >
            Executive Manager
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            type="button"
            className="btn btn-dark fw-bold"
            style={
              cardSelected === "field-executive"
                ? { background: "cadetblue" }
                : { border: "1px solid #fff" }
            }
            onClick={() => setCardSelected("field-executive")}
            aria-label="Select field executives button"
          >
            Field Executives
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            type="button"
            className="btn btn-dark fw-bold"
            style={
              cardSelected === "Supervisor"
                ? { background: "cadetblue" }
                : { border: "1px solid #fff" }
            }
            onClick={() => setCardSelected("Supervisor")}
            aria-label="Select supervisors button"
          >
            Supervisor
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            type="button"
            className="btn btn-dark fw-bold"
            style={
              cardSelected === "housekeeping-boys"
                ? { background: "cadetblue" }
                : { border: "1px solid #fff" }
            }
            onClick={() => setCardSelected("housekeeping-boys")}
            aria-label="Select housekeeping boys button"
          >
            Housekeeping Boys
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Filter;
