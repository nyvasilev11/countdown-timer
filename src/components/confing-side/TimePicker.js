import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { getTimeAction } from "../../actions";

const TimePicker = () => {
  const dispatchTime = useDispatch();
  const showTime = useSelector(state => state.clock);

  const handleDispatchTime = time => {
    return dispatchTime(getTimeAction(time));
  };

  return (
    <div>
      <DatePicker
        selected={showTime}
        onChange={handleDispatchTime}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={10}
        timeCaption="Time"
        dateFormat="HH:mm"
      />
    </div>
  );
};

export default TimePicker;
