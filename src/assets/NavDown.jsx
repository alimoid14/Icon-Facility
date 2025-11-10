import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faAlarmClock,
  faGlobe,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function NavDown({
  homeact,
  aboutact,
  contactact,
  projectact,
  serviceact,
  teamAct,
}) {
  const styles = { textDecoration: "none", color: "black", padding: "0px 0px" };

  const activestyle = {
    backgroundColor: "#4294e1",
    color: "#fff",
    textDecoration: "none",
    padding: "0px 8px",
  };

  return (
    <>
      <header
        className="navbar bg-black shadow-sm text-white mt-[64px] mb-2"
        aria-label="Navigation Layer 2"
      >
        <div className="w-full max-w-7xl md:px-0 lg:px-12 mx-auto flex flex-col lg:flex-row !items-center justify-between">
          <div className="">
            <Link
              to="/"
              className="btn btn-ghost text-xl mb-3 block !overflow-clip"
            >
              <img
                src={logo}
                alt="Icon-Facility logo"
                className="h-10 mx-auto"
              />
            </Link>
          </div>
          <div
            className="flex flex-col w-full lg:w-fit md:flex-row md:justify-between gap-x-8 px-4 md:px-0 mr-auto md:mr-0"
            aria-label="Contanct and Info"
          >
            <div className="phone">
              <FontAwesomeIcon icon={faPhone} /> +91 09910259922
            </div>
            <div className="address">
              <FontAwesomeIcon icon={faGlobe} />
              New Delhi - 110085
            </div>
            <div className="timing">
              <FontAwesomeIcon icon={faAlarmClock} /> Monday / Friday: 7:00 -
              17:00
            </div>
            <div className="social ">
              <FontAwesomeIcon icon={faFacebook} aria-label="Facebook" />
              <FontAwesomeIcon icon={faX} aria-label="Twitter" />
              <FontAwesomeIcon icon={faYoutube} aria-label="Youtube" />
            </div>
          </div>
        </div>
      </header>
      <nav
        className="flex flex-col lg:flex-row gap-2 lg:!px-15 justify-between items-center max-w-7xl mx-auto"
        aria-label="Navigation Layer 3"
        role="navigation"
      >
        <ul
          className="hidden w-full lg:w-fit sm:flex sm:flex-row lg:gap-5 px-4 lg:!px-0 justify-between bg-transparent text-lg fw-bold flex-nowrap items-center my-auto"
          aria-label="Navigation Layer 3 P1"
        >
          <li className={`py-2 ${homeact}`}>
            <Link
              to="/"
              className="link"
              style={homeact === "active-link" ? activestyle : styles}
            >
              Home
            </Link>
          </li>
          <li className={`py-2 ${aboutact}`}>
            <Link
              to="/about"
              style={aboutact === "active-link" ? activestyle : styles}
            >
              About
            </Link>
          </li>
          <li className={`py-2 ${serviceact}`}>
            <Link
              to="/services"
              style={serviceact === "active-link" ? activestyle : styles}
            >
              Services
            </Link>
          </li>
          <li className={`py-2 ${projectact}`}>
            <Link
              to="/projects"
              style={projectact === "active-link" ? activestyle : styles}
            >
              Projects
            </Link>
          </li>
          <li className={`py-2 ${contactact}`}>
            <Link
              to="/contact"
              style={contactact === "active-link" ? activestyle : styles}
            >
              Contact Us
            </Link>
          </li>
          <li className={`py-2 ${teamAct}`}>
            <Link
              to="/Team"
              style={teamAct === "active-link" ? activestyle : styles}
            >
              Our Team
            </Link>
          </li>
        </ul>

        {/* nav layer 3 */}
        <div
          className="w-fit flex flex-row gap-2 justify-center items-center"
          aria-label="Navigation Layer 3 P2"
        >
          <button
            type="button"
            className="btn !rounded-full"
            style={{ backgroundColor: "#115599", color: "#fff" }}
          >
            Request Estimate
          </button>
          <button
            type="button"
            className="btn !rounded-full"
            style={{ backgroundColor: "#4294e1", color: "#fff" }}
          >
            Make Appointment
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavDown;

//Removed this snippet as its there in first nav level
// <div className="!w-full">
//           <ul className="bg-base-200 text-lg fw-bold ">
//             <li className={homeact}>
//               <a>
//                 <Link
//                   to="/"
//                   className="link"
//                   style={homeact === "active-link" ? activestyle : styles}
//                 >
//                   Home
//                 </Link>
//               </a>
//             </li>
//             <li className={aboutact}>
//               <a>
//                 <Link
//                   to="/about"
//                   style={aboutact === "active-link" ? activestyle : styles}
//                 >
//                   About
//                 </Link>
//               </a>
//             </li>
//             <li className={serviceact}>
//               <a>
//                 <Link
//                   to="/services"
//                   style={serviceact === "active-link" ? activestyle : styles}
//                 >
//                   Services
//                 </Link>
//               </a>
//             </li>
//             <li className={projectact}>
//               <a>
//                 <Link
//                   to="/projects"
//                   style={projectact === "active-link" ? activestyle : styles}
//                 >
//                   Projects
//                 </Link>
//               </a>
//             </li>
//             <li className={contactact}>
//               <a>
//                 <Link
//                   to="/contact"
//                   style={contactact === "active-link" ? activestyle : styles}
//                 >
//                   Contact Us
//                 </Link>
//               </a>
//             </li>
//             <li className={teamAct}>
//               <a>
//                 <Link
//                   to="/Team"
//                   style={teamAct === "active-link" ? activestyle : styles}
//                 >
//                   Our Team
//                 </Link>
//               </a>
//             </li>
//           </ul>
//         <div/>
