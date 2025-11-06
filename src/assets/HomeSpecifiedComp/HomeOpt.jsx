import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faCalendar,
  faCheck,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import HomeOptCard from "./HomeOptCard";

function HomeOpt() {
  return (
    <>
      <section
        className="contain p-5  w-full minh-25 my-5 "
        style={{ backgroundColor: "#ccc9c9ff", margin: "0", width: "100vw" }}
      >
        <div
          className="icons w-full d-flex flex-wrap align-items-center justify-content-center gap-3"
          aria-label="Card container"
        >
          <HomeOptCard
            icon={faPhone}
            title="Send us a Message"
            caption="Or give us a call to get in touch with one of our office managers"
            btnText="Contact us"
          />

          <HomeOptCard
            icon={faCalendar}
            title="Schedule Cleaning"
            caption="We don’t charge extra costs and there are no hidden fees"
            btnText="Schedule Cleaning"
          />

          <HomeOptCard
            icon={faCheck}
            title="Providing Services"
            caption="We provide the services you booked very professionally"
            btnText="View Services"
          />

          <HomeOptCard
            icon={faHandshake}
            title="Finish the Job"
            caption="Our job is finished when the client is satisfied"
            btnText="See Testimonials"
          />
        </div>
      </section>
    </>
  );
}

export default HomeOpt;
