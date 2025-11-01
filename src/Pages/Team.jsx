import { useState } from "react";
import CarouselCont from "../assets/CarouselCont";
import NavDown from "../assets/NavDown";
import Abhishek from "../assets/pics/team/abhishek.jpg";
import andrebriggs from "../assets/pics/team/andrebriggs.jpg";
import Kishan from "../assets/pics/team/Kishan.jpg";
import markneel from "../assets/pics/team/markneel.jpg";
import michaelwill from "../assets/pics/team/michaelwill.jpg";
import shawnrobinson from "../assets/pics/team/shawnrobinson.jpg";
import shirleyhiggins from "../assets/pics/team/shirleyhiggins.jpg";
import susieross from "../assets/pics/team/susieross.jpg";
import Teampic from "../assets/pics/Teampic.jpg";
import Filter from "../assets/TeamComp/Filter";
import MemberCard from "../assets/TeamComp/MemberCard";

function Team() {
  const [cardSelected, setCardSelected] = useState("");

  const members = [
    {
      img: Kishan,
      title: "Kishan",
      caption: "Executive Director",
      role: "executive-director",
      description:
        "With over eight years of expertise in facility management services, Kishan brings strong leadership and deep client insight. He is committed to delivering excellence while fostering long-term, trust-based relationships with clients.",
    },
    {
      img: Abhishek,
      title: "Kishan",
      caption: "Abhishek Sharma",
      role: "executive-director",
      description:
        "An MBA in Marketing with five years of experience in facility management, he combines expertise with a client-focused approach, delivering services with passion, patience, and a positive attitude.",
    },
    {
      img: susieross,
      title: "Susie Ross",
      caption: "Finance Manager",
      role: "finance-manager",
    },
    {
      img: andrebriggs,
      title: "Andre Briggs",
      caption: "Supervisor",
      role: "Supervisor",
    },
    {
      img: Kishan,
      title: "Roberto Davis",
      caption: "Housekeeper",
      role: "housekeeping-boys",
    },
    {
      img: michaelwill,
      title: "Michael Will",
      caption: "Housekeeper",
      role: "housekeeping-boys",
    },
    {
      img: shawnrobinson,
      title: "Shawn Robinson",
      caption: "Executive Manager",
      role: "executive-manager",
    },
    {
      img: shirleyhiggins,
      title: "Shirley Higgins",
      caption: "Field Executive",
      role: "field-executive",
    },
    {
      img: markneel,
      title: "Mark Neel",
      caption: "Field Executive",
      role: "field-executive",
    },
  ];

  const filteredMembers =
    cardSelected === ""
      ? members
      : members.filter((m) => m.role === cardSelected);

  return (
    <>
      <NavDown
        homeact=""
        aboutact=""
        contactact=""
        serviceact=""
        projectact=""
        teamAct="active-link"
      />
      <CarouselCont
        displaybut="none"
        imgsrc={Teampic}
        smalltxt="Teamwork divides the task and multiplies the success."
        bigtxt1="Our Team"
        bigtxt2=""
      />

      <Filter cardSelected={cardSelected} setCardSelected={setCardSelected} />

      <div className="members flex flex-wrap gap-5 align-items-center justify-content-center mb-5 p-5 bg-dark !items-stretch">
        {filteredMembers.map((m, idx) => (
          <MemberCard
            className="w-80"
            key={idx}
            imgsrc={m.img}
            title={m.title}
            caption={m.caption}
            description={m.description}
          />
        ))}
      </div>
    </>
  );
}

export default Team;
