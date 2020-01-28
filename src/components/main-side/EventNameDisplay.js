import React from "react";
import { useSelector } from "react-redux";

const EventName = () => {
  const eventName = useSelector(({ eventName }) => eventName);

  return <p>{eventName}</p>;
};

export default EventName;
