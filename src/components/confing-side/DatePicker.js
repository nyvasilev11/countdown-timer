import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { getDateAction } from "../../actions";

const DatePickerC = () => {
  const dispatchDate = useDispatch();
  const showDate = useSelector(state => state.date);

  const handleDispatchDate = date => {
    return dispatchDate(getDateAction(date));
  };

  return (
    <div className="config-side__config config-side__config--date">
      <p className="config-side__sub-title">Countdown to date:</p>
      <DatePicker
        className="config-side__input"
        dateFormat="dd/MM/yyyy"
        selected={showDate}
        onChange={handleDispatchDate}
        minDate={new Date()}
      />
    </div>
  );
};

export default DatePickerC;
