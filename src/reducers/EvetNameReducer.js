const EventNameReducer = (state = "Event Name", { type, payload }) => {
  switch (type) {
    case "name":
      return payload;
    default:
      return state;
  }
};

export default EventNameReducer;
