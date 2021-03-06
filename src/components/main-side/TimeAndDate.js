import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TimeAndDate = () => {
  let timeProp = useSelector(state => state.clock);
  let dateProp = useSelector(state => state.date);

  const [timePropLocal, setTimeProp] = useState({});
  const [datePropLocal, setDateProp] = useState({});

  const checkBox = useSelector(state => state.dateNameShowHide);

  useEffect(() => {
    const renderDateTimeLeft = setInterval(() => {
      let now = new Date();

      let distanceTime = timeProp - now;
      let distanceDate = dateProp - now;

      let days = Math.floor(distanceDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distanceTime % (1000 * 60)) / 1000);

      setTimeProp({
        ...timePropLocal,
        hour: hours,
        minute: minutes,
        second: seconds
      });

      setDateProp({ day: days + 1 });
    }, 100);
    return () => {
      clearInterval(renderDateTimeLeft);
    };
  });

  return (
    <div className="main-side__clock">
      <div>
        {datePropLocal.day}
        <p>
          {datePropLocal.day > 1 || datePropLocal.day < -1 ? " days " : " day "}
        </p>
      </div>
      <div className="main-side__clock--border">
        {timePropLocal.hour}
        <p>
          {timePropLocal.hour > 1 || timePropLocal.hour < -1
            ? " hours "
            : " hour "}
        </p>
      </div>
      <div className="main-side__clock--border">
        {timePropLocal.minute}
        <p>
          {timePropLocal.minute > 1 || timePropLocal.minute < -1
            ? " minutes "
            : " minute "}
        </p>
      </div>
      <div>
        {timePropLocal.second}
        <p>
          {timePropLocal.second > 1 || timePropLocal.second < -1
            ? " seconds "
            : " second "}
        </p>
      </div>

      {checkBox === "hideDateTitle" ? null : (
        <p className="main-side__timeAndDate">
          {new Date(dateProp).toDateString()}
        </p>
      )}
    </div>
  );
};

export default TimeAndDate;
