const GetTimeReducer = (state = new Date(), { type, payload }) => {
  switch (type) {
    case "clock":
      return payload.getTime();
    default:
      return state;
  }
};

export default GetTimeReducer;
