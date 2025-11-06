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

function NavDown() {
  // const styles = { textDecoration: "none", color: "black" };

  // const activestyle = {
  //   backgroundColor: "#4294e1",
  //   color: "#fff",
  //   textDecoration: "none",
  // };

  return (
    <>
      <header
        className="navbar bg-base-100 shadow-sm me-0 pe-1 text-white flex flex-col"
        aria-label="Navigation Layer 2"
      >
        <div className="navbar-start h-25 mx-auto">
          <Link
            to="/"
            className="btn btn-ghost text-xl mb-3 w-100 h-100 block mx-auto"
          >
            <img src={logo} alt="Icon-Facility logo" className="h-10 mx-auto" />
          </Link>
        </div>
        <div
          className="nav flex flex-col md:flex-row !flex-wrap gap-x-8 px-4 md:px-6 mr-auto md:mx-auto"
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
      </header>
      <div
        className="nav-pages"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* nav layer 3 */}
        <div
          className="w-full flex flex-row justify-center pt-3 items-center"
          aria-label="Navigation Layer 3"
        >
          <button
            type="button"
            className="btn me-2 px-2"
            style={{ backgroundColor: "#115599", color: "#fff" }}
          >
            Request Estimate
          </button>
          <button
            type="button"
            className="btn "
            style={{ backgroundColor: "#4294e1", color: "#fff" }}
          >
            Make Appointment
          </button>
        </div>
      </div>
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
