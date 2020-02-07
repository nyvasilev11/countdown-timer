import React from "react";
import EventNameCenter from "./EventNameDisplay";
import TimeAndDate from "./TimeAndDate";

const MainSide = () => {
  return (
    <section className="main-side">
      <EventNameCenter className="main-side__event-name" />
      <TimeAndDate className="main-side__time-date" />
    </section>
  );
};

export default MainSide;
