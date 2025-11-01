import React from "react";
import cleaning from "../pics/cleaning.jpg";
import hospitality_cleaning from "../pics/hospitality_cleaning.jpg";
import office_cleaning from "../pics/office_cleaning.jpg";
import industrialcleaning from "../pics/industrialcleaning.jpg";
import warehouse_cleaning from "../pics/warehouse_cleaning.jpg";
import high_access_cleaning from "../pics/high_access_cleaning.jpg";
import Servicecard from "./Servicecard";

function HomeService() {
  return (
    <>
      <div className="flex flex-wrap my-5 justify-center !items-stretch">
        <Servicecard
          imgsrc={cleaning}
          title="Construction Cleaning"
          caption="If you've just finished construction work, let us get rid of the dirt and grime to make…"
          className="w-80"
        />
        <Servicecard
          imgsrc={hospitality_cleaning}
          title="Hospitality Cleaning"
          caption="Our hospitality cleaning services are perfect to clean hotels, resorts and casinos and…"
          className="w-80"
        />

        <Servicecard
          imgsrc={office_cleaning}
          title="Office Cleaning"
          caption="Enjoy your modern and comfortable office, from ensuring that the coffee cups are…"
          className="w-80"
        />

        <Servicecard
          imgsrc={industrialcleaning}
          title="Industrial Cleaning"
          caption="Our industrial cleaning services are suited to any industrial premises, whether it’s…"
          className="w-80"
        />

        <Servicecard
          imgsrc={warehouse_cleaning}
          title="Warehouse Cleaning"
          caption="Warehouse cleaning is an essential aspect of maintenance and leasing since it…"
          className="w-80"
        />

        <Servicecard
          imgsrc={high_access_cleaning}
          title="High Access Cleaning"
          caption="Any building or structure more than two stories high requires special window…"
          className="w-80"
        />
      </div>
    </>
  );
}

export default HomeService;
