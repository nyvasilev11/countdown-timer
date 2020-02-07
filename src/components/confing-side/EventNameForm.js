import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getEventName } from "../../actions";

const EventName = () => {
  const dispatchName = useDispatch();
  const inputRef = useRef();

  const handleEventName = e => {
    const name = e.target.value;
    dispatchName(getEventName(name));
  };
  return (
    <div className="config-side__config config-side__config--name">
      <p className="config-side__sub-title">Countdown title</p>
      <input
        className="config-side__input"
        ref={inputRef}
        type="text"
        onChange={handleEventName}
        placeholder="Event Name"
      />
    </div>
  );
};

export default EventName;
