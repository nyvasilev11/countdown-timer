import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TimeAndDate = () => {
  let timeProp = useSelector(state => state.clock);
  let dateProp = useSelector(state => state.date);

  const [timePropLocal, setTimeProp] = useState({});
  const [datePropLocal, setDateProp] = useState({});

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
    }, 1000);
    return () => {
      clearInterval(renderDateTimeLeft);
    };
  });

  return (
    <div>
      <span>
        {datePropLocal.day}
        {datePropLocal.day > 1 || datePropLocal.day < -1 ? ' days ' : ' day '}
      </span>
      <span>
        {timePropLocal.hour}
        {timePropLocal.hour > 1 || timePropLocal.hour < -1
          ? ' hours '
          : ' hour '}
      </span>
      <span>
        {timePropLocal.minute}
        {timePropLocal.minute > 1 || timePropLocal.minute < -1
          ? ' minutes '
          : ' minute '}
      </span>
      <span>
        {timePropLocal.second}
        {timePropLocal.second > 1 || timePropLocal.second < -1
          ? ' seconds '
          : ' second '}
      </span>
      <p>{new Date(dateProp).toDateString()}</p>
    </div>
  );
};

export default TimeAndDate;
