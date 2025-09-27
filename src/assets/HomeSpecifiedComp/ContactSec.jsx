import React from "react";
import styles from './ContactSec.module.css'

function ContactSec() {

    function submitForm(e){
        e.preventDefault()
        setTimeout(()=>{
            document.getElementById("result").style.display="none";
        },3000)
        document.getElementById("result").style.display="block";
        document.querySelectorAll("input").forEach(el=>el.value="")
        document.querySelector("select").selectedIndex=0;
    }

  return (
    <div
      className={` w-full bg-dark min-h-75  ${styles.outer}`}
      style={{ gridTemplateColumns: "35% 65%" }}
    >
      <div className={` d-flex flex-wrap  ${styles.details}` }>
        <div
          class="card w-96 bg-base-100 card-lg shadow-sm px-4 pt-4"
          style={{ background: "transparent", color: "#fff" }}
        >
          <div classname={`card-body ${styles.cardBody}`}>
            <h5 className={styles.cardBodyHeading} style={{ color: "#f7d32d" }}>Discuss Details</h5>
            <h1 className={styles.cardBodyHeading}>Request Call Back</h1>
            <p className={styles.cardBodyHeading}>
              Enter your details in the form and your message will be dispatched
              directly to our staff who will get in touch with you as soon as
              they can
            </p>
          </div>
        </div>
      </div>
      <div className={` d-flex-column   align-items-center ${styles.contactForm}`} >
        <div className={`card  bg-base-100 card-lg shadow-sm bg-transparent mt-5 mb-2 ${styles.formContainer}`}>
          <p style={{ color: "#fff" }}>Please enter your details:</p>
        </div>

        <div className={`form `} style={{color:"#fff"}}>
          
          <form>
            <fieldset className={`fieldset d-flex flex-wrap ${styles.inputContainer}`}>
        
            <input
              type="text"
              className="input"
              placeholder="Your Name.."
              style={{color:"#333",fontSize:"18px"}}
              required
            />
            
            <select className="bg-light text-dark px-5 input " style={{fontSize:"18px"}} required>
                <option value="Industrial Cleaning">Industrial Cleaning</option>
                <option value="Contract Cleaning">Contract Cleaning</option>
                <option value="Office Cleaning">Office Cleaning</option>
                <option value="Builders Cleaning">Builders Cleaning</option>
                <option value="Hotel Cleaning">Hotel Cleaning</option>
                <option value="Other">Other</option>
            </select>
          </fieldset>

          <fieldset className={`fieldset d-flex flex-wrap ${styles.inputContainer}`}>
        
            <input
              type="number"
              className="input"
              placeholder="Your Phone number.."
              style={{color:"#333",fontSize:"18px"}}
              required
            />

            <button className="btn btn-primary input overflow-hidden" onClick={submitForm} style={{fontSize:"18px"}}> Call me back</button>
            
            
          </fieldset>
          </form>

          <div className="result mt-5" id="result" style={{display:"none"}} >
            <h5>Thank you for contacting us. Someone from our team will contact you shortly!</h5>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default ContactSec;
