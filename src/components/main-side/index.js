import React from "react";
import EventNameCenter from "./EventNameDisplay";
import TimeAndDate from "./TimeAndDate";

const MainSide = () => {
  return (
    <section className="mainSide">
      <EventNameCenter className="mainSide__event-name" />
      <TimeAndDate className="mainSide__time-date" />
    </section>
  );
};

export default MainSide;
