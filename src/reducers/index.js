const date = new Date();
date.setDate(date.getDate() + 29);

const time = new Date();
time.setTime(time.getTime() + 1000 * (1000 * 1000));

const defaultState = {
  date: date,
  clock: time,
  eventName: "Event Name",
  bgColor: "#0af",
  textColor: "#f1f1f1",
  sizeWidth: null,
  sizeHeight: null,
  borderRadius: 0,
  checkBoxChecked: ""
};

export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case "calendar":
      return {
        ...state,
        date: payload
      };
    case "clock":
      return {
        ...state,
        clock: payload
      };
    case "name":
      return {
        ...state,
        eventName: payload
      };
    case "bgColor":
      return {
        ...state,
        bgColor: payload.hex
      };
    case "textColor":
      return {
        ...state,
        textColor: payload.hex
      };
    case "size":
      return {
        ...state,
        sizeWidth: payload * 0.5,
        sizeHeight: payload * 0.2
      };
    case "radius":
      return {
        ...state,
        borderRadius: payload
      };
    case "checkBox":
      return {
        ...state,
        checkBoxChecked: payload
      };
    default:
      console.log(state);
  }
  return state;
}
