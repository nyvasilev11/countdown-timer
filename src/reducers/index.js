const defaultState = {
  date: Date.parse(new Date()),
  clock: new Date(),
  eventName: "Event Name",
  bgColor: "",
  textColor: ""
};

export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case "calendar":
      return {
        ...state,
        date: Date.parse(payload)
      };
    case "clock":
      return {
        ...state,
        clock: payload.getTime()
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
    default:
      console.log(state);
  }
  return state;
}
