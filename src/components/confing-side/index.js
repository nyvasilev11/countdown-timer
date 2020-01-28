import React from "react";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import EventName from "./EventNameForm";

const LeftSide = () => {
  return (
    <div>
      <p>Countdown title</p>
      <EventName />
      <p>Countdown to date:</p>
      <DatePicker />
      <p>Event time:</p>
      <TimePicker />
    </div>
  );
};

export default LeftSide;
