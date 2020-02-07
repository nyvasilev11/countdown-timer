import React from "react";
import { useSelector } from "react-redux";

const EventNameCenter = () => {
  const eventName = useSelector(({ eventName }) => eventName);

  return <p className="main-side__title">{eventName}</p>;
};

export default EventNameCenter;
