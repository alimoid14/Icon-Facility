import React from "react";
import { Link } from "react-router-dom";
import styles from "./Servicecard.module.css";

function Servicecard({ imgsrc, title, caption }) {
  return (
    <>
      <article
        className={`bg-white px-3 w-80 shadow-sm mb-5 mx-5 flex flex-col justify-between pb-3 ${styles.service}`}
        aria-labelledby="card-title"
      >
        <figure>
          <img src={imgsrc} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h3 className="card-title overflow-hidden">{title}</h3>
          <p>{caption}</p>
          <div className="card-actions justify-start">
            <button className="btn bg-light" type="button">
              <Link
                className="text-decoration-none text-info mt-auto"
                to="/service"
              >
                View Service
              </Link>
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Servicecard;
