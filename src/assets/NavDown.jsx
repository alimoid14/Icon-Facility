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
import styling from './NavDown.module.css';

function NavDown({homeact,aboutact,contactact,projectact,serviceact,teamAct}) {
  const styles={textDecoration:"none",color:"black"};

  const activestyle={backgroundColor:"#4294e1",color:"#fff",textDecoration:"none"};

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm me-0 pe-1">
        <div className="navbar-start w-60 h-25  " style={{ marginLeft: "10%" }}>
          <a className="btn btn-ghost text-xl mb-3 w-100 h-100 ">
            <Link to="/">
            <img src={logo} alt="" className="h-10 ms-5" />
            </Link>
          </a>
        </div>
        <div className={`nav md:flex md:flex-wrap  me-5 ${styling.navDetails}`}>
          <div className="phone me-5">
            <FontAwesomeIcon icon={faPhone} /> +91 09910259922
          </div>
          <div className="address me-5">
            <FontAwesomeIcon icon={faGlobe} />
            New Delhi - 110085
          </div>
          <div className="timing me-5">
            <FontAwesomeIcon icon={faAlarmClock} /> Monday / Friday: 7:00 -
            17:00
          </div>
          <div className="social ">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faX} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </div>
      <div className="nav-pages" style={{display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:'wrap'}}>
        <div className={`left-link ${styling.navLinks}`} style={{marginLeft:'11%'}}>
            <ul className="menu menu-vertical bg-transparent lg:menu-horizontal bg-base-200 rounded-box text-lg fw-bold ">
          <li className={homeact}>
            <a ><Link to='/' className="link" style={homeact==="active-link"?activestyle:styles} >Home</Link></a>
          </li>
          <li className={aboutact}>
            <a><Link to='/about' style={aboutact==="active-link"?activestyle:styles}>About</Link></a>
          </li>
          <li className={serviceact}>
            <a><Link to='/services' style={serviceact==="active-link"?activestyle:styles}>Services</Link></a>
          </li>
          <li className={projectact}>
            <a><Link to='/projects' style={projectact==="active-link"?activestyle:styles}>Projects</Link></a>
          </li>
          <li className={contactact}>
            <a><Link to='/contact' style={contactact==="active-link"?activestyle:styles}>Contact Us</Link></a>
          </li>
          <li className={teamAct}>
            <a><Link to='/Team' style={teamAct==="active-link"?activestyle:styles}>Our Team</Link></a>
          </li>
        </ul>
        </div>
        <div className={styling.enquiry} style={{marginRight:'5%',overflow:"hidden"}}>
            <button className="btn  me-2 px-2" style={{backgroundColor:"#115599",color:"#fff"}}>Request Estimate</button>
            <button className="btn " style={{backgroundColor:"#4294e1",color:"#fff"}}>Make Appointment</button>
        </div>
      </div>
    </>
  );
}

export default NavDown;
