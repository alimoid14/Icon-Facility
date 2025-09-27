import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './Footer.css';

import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  const [showMessage,setShowmessage]=useState(false);
  function submitForm(e){
    e.preventDefault();
    setShowmessage(true);
    document.getElementById("email").value="";
    setTimeout(()=>{
      setShowmessage(false);
    },3000)
  }
  return (
    <>
    <footer className="footer sm:footer-horizontal d-flex flex-wrap  bg-base-200 text-base-content p-10 foot text-white" style={{minHeight:"60vh"}}>
    <nav className=' mx-2' >
    <h5 className="footer-title">SATISFACTION GUARANTEE</h5>
    <p className='w-100'>We ensure customer satisfaction through an integrated service system, backed by stringent policies and standards in Quality, Safety, Health, Environment, and Social Accountability.</p>
  </nav>
  <nav className='mx-5 '>
    <h5 className="footer-title">Quick Navigation</h5>
    <a className="link link-hover fw-bold text-lg"><Link to='/'>Home</Link></a>
    <a className="link link-hover fw-bold text-lg"><Link to='/about'>About</Link></a>
    <a className="link link-hover fw-bold text-lg"><Link to='/services'>Services</Link></a>
    <a className="link link-hover fw-bold text-lg"><Link to='/contact'>Contact Us</Link></a>
  </nav>
  <nav className='mx-5 '>
    <h5 className="footer-title">Contact Details</h5>
    <a className="link link-hover"> <FontAwesomeIcon size='xl' icon={faLocationDot} /> D-35 VIJAY VIHAR PH-2,<br />  
        <span> AVANTIKA ROHINI, New Delhi - 110085</span></a>

    <a className="link link-hover"><FontAwesomeIcon size='xl' icon={faPhone} /> 09910259922, 9811789690<br />
Mon till Friday: 7:00 till 5:00
</a>
    <a className="link link-hover"><FontAwesomeIcon size='xl' icon={faEnvelope} /> iconfacility.00@gmail.com, info@iconfacility.com<br />
We reply within 1 work day</a>
    
  </nav>
  
  <form className='mx-5 '>
    <h5 className="footer-title" >Newsletter</h5>
    <fieldset className="w-55">
      <label>Enter your email address</label>
      <div className="join mt-1">
        <input
          type="text"
          id='email'
          style={{height:'30px',marginTop:'2%',color:"#333"}}
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item ms-2" onClick={submitForm} style={{height:"30px",marginTop:"2%",fontSize:"12px",overflow:"hidden"}}>Subscribe</button>
      </div>
      {
        showMessage && (
          <div className="result mt-2 text-info ">
    <h6>Thank you for subscribing!!</h6>
  </div>
  )
      }
    </fieldset>
    <h5 className="footer-title mt-3">Working Hours</h5>
    <p><span className='me-3 fw-bold'>Monday - Friday </span>      <span> 07:00 - 16:00</span></p>
    <p><span className='me-5 fw-bold'>Saturday </span>      <span className='ms-3'>08:00 - 15:00</span></p>
    <p><span className='me-5 fw-bold'>Sunday </span>      <span className='ms-4'>We're closed</span></p>
  </form>
  
</footer>
    </>
  )
}

export default Footer