import { faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './ContactForm.module.css';
import FormElement from "./FormElement";

function ContactForm() {

  return (
    <>
      <div className={`container w-full d-flex my-5 ${styles.container}`} >
        <div className="form w-50 d-flex flex-column flex-wrap me-3 text-wrap mb-4">
          <h2>Send us a message</h2>
          <p className="text-secondary text-wrap">
            Feel free to get in touch by phone or through the contact form
            below. Your message will be send directly to our staff who will
            answer as soon as they can.
          </p>
          <FormElement />

          
        </div>

        <div className="location d-flex flex-column ms-3">
          <h2 className={`container ${styles.head}`} >Office Location</h2>

          <div className={`container my-4 ${styles.mapAlign}`} >
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3182142901646!2d77.09218907495969!3d28.710034680557918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06aec46073a5%3A0x5a3f5241591ad71a!2sICON%20HOUSEKEEPING%20SERVIES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1758915212407!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{border:"0"}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              
            ></iframe>
          </div>

          <div className="address d-flex my-4 " >

            <div className="container d-flex-column flex-wrap mb-2">
                <h3>Company Address</h3>
                <p className="text-secondary">D-35 VIJAY VIHAR PH-2, <br />AVANTIKA ROHINI,<br />  New Delhi - 110085,</p>
                <div className="icons d-flex">
                    <FontAwesomeIcon className="text-xl" icon={faFacebook} />
                    <FontAwesomeIcon className="text-xl" icon={faXTwitter} />
                    <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
                </div>
            </div>

            <div className="container d-flex-column flex-wrap mb-2">
                <h3>Contact Details</h3>
                <p className="text-secondary">
                    +91-9910259922, <br />+91- 9811789690
                </p>
                <a href="#" style={{textDecoration:"none"}}>iconfacility.00@gmail.com,</a><br />
                <a href="#" style={{textDecoration:"none"}}>info@iconfacility.com</a>
                
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ContactForm;
