import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Footer.css";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const [showMessage, setShowmessage] = useState(false);
  function submitForm(e) {
    e.preventDefault();
    setShowmessage(true);
    document.getElementById("email").value = "";
    setTimeout(() => {
      setShowmessage(false);
    }, 3000);
  }
  return (
    <>
      <footer
        className="footer bg-base-200 !grid sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-6 p-10 foot text-white"
        style={{ minHeight: "60vh" }}
      >
        <div aria-labelledby="satisfaction-guarantee" className="">
          <h5
            className="w-full footer-title text-left"
            id="satisfaction-guarantee"
          >
            SATISFACTION GUARANTEE
          </h5>
          <p className="text-left">
            We ensure customer satisfaction through an integrated service
            system, backed by stringent policies and standards in Quality,
            Safety, Health, Environment, and Social Accountability.
          </p>
        </div>
        <nav className="" aria-labelledby="quick-navigation">
          <h5 className="footer-title" id="quick-navigation">
            Quick Navigation
          </h5>
          <Link to="/" className="link link-hover fw-bold text-lg">
            Home
          </Link>

          <Link to="/about" className="link link-hover fw-bold text-lg">
            About
          </Link>

          <Link to="/services" className="link link-hover fw-bold text-lg">
            Services
          </Link>

          <Link to="/contact" className="link link-hover fw-bold text-lg">
            Contact Us
          </Link>
        </nav>
        <nav aria-labelledby="contact-details" className="">
          <h5 className="footer-title" id="contact-details">
            Contact Details
          </h5>
          <a className="link link-hover text-left">
            {" "}
            <FontAwesomeIcon size="xl" icon={faLocationDot} /> D-35 VIJAY VIHAR
            PH-2,
            <br />
            <span> AVANTIKA ROHINI, New Delhi - 110085</span>
          </a>

          <a className="link link-hover text-left">
            <FontAwesomeIcon size="xl" icon={faPhone} /> 09910259922, 9811789690
            <br />
            Mon till Friday: 7:00 till 5:00
          </a>
          <a className="link link-hover text-left">
            <FontAwesomeIcon size="xl" icon={faEnvelope} />{" "}
            iconfacility.00@gmail.com, info@iconfacility.com
            <br />
            We reply within 1 work day
          </a>
        </nav>

        <div aria-labelledby="working-hours-title" className="">
          <h5 className="footer-title" id="working-hours-title">
            Working Hours
          </h5>
          <p className="flex flex-row justify-between">
            <span className="me-3 fw-bold">Monday - Friday </span>
            <span>07:00 - 16:00</span>
          </p>
          <p className="flex flex-row justify-between">
            <span className="me-5 fw-bold">Saturday </span>
            <span className="ms-3">08:00 - 15:00</span>
          </p>
          <p className="flex flex-row justify-between">
            <span className="me-5 fw-bold">Sunday </span>
            <span className="ms-4">&nbsp;We're closed</span>
          </p>
        </div>

        <form aria-labelledby="newsletter-form" className="">
          <h5 className="footer-title" id="newsletter-form">
            Newsletter
          </h5>
          <fieldset className="w-55">
            <label htmlFor="email" className="w-full !text-left">
              Enter your email address
            </label>

            <input
              type="text"
              id="email"
              style={{ height: "30px", marginTop: "2%", color: "#333" }}
              placeholder="username@site.com"
              className="input input-bordered join-item !text-gray-300 focus:!outline-none rounded-sm"
            />
            <button
              type="submit"
              className="btn btn-primary join-item"
              onClick={submitForm}
              style={{
                height: "30px",
                marginTop: "2%",
                fontSize: "12px",
                overflow: "hidden",
              }}
            >
              Subscribe
            </button>

            {showMessage && (
              <p className="result mt-2 text-info ">
                Thank you for subscribing!!
              </p>
            )}
          </fieldset>
        </form>
      </footer>
    </>
  );
}

export default Footer;
