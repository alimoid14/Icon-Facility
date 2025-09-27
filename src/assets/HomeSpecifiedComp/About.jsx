import hospitality_cleaning from "../pics/hospitality_cleaning.jpg";
import styles from './About.module.css';

function About() {
  return (
    <>
      <div className="card    my-5 " style={{padding:"3% 0"}}>
        <div className="card1-body border-none outline-none">
          <div
            className="item px-5"
            style={{ width: "100vw", paddingLeft: "10%" }}
          >
            <img
              src={hospitality_cleaning}
              className={styles.aboutimage}
              alt="Movie"
              
            />

            <div className={`text2 ${styles.textcont} `}>
                <h5 className="card1" style={{color:"#4294e1"}}>Our Advantages</h5>
            <h1>About our Company</h1>
            <p>
            We are revolutionizing housekeeping with state-of-the-art automated systems. From ride-on scrubbers, 
            dryers, and sweepers to powerful vacuum cleaners, spray extractors, high-pressure machines,single-disk polishers, 
            and lawn mowers — our technology ensures efficiency, precision, and superior results.
             
      <br />
 </p>
      <br/>
             <h2>Best Service Provider</h2>
        <p>We believe that true service is the highest calling — an act of nobility rendered purely for its own sake</p>
           <br/>
           <h3>Motivating Team With Humanitarian Touch</h3>
<p>We believe that the best way to motivate our workforce is by helping and supporting them on humanitarian grounds.</p>
<br />
<h3>Leaders</h3>
<p>ICON develop leaders.</p>
<br/>
<h3>Commitment</h3>
<p>For TEAM ICON, commitment is not just a word — it is an act. When we commit, we deliver with honesty, sincerity, and consistency,
   because we believe there is no success without commitment.
We value respect at every level: respect for ourselves shapes our morals, 
while respect for colleagues and others defines our manners.</p>
<br/>
<h3>Focused and Attentive</h3>
<p>We maintain focus and dedication, recognizing that these qualities are fundamental prerequisites for achieving greatness.</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
