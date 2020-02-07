import React from "react";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import EventName from "./EventNameForm";

const LeftSide = () => {
  return (
    <section className="config-side">
      <EventName />
      <DatePicker />
      <TimePicker />
    </section>
  );
};

export default LeftSide;
