const getDateReducer = (state = Date.parse(new Date()), { type, payload }) => {
  switch (type) {
    case "calendar":
      return Date.parse(payload);
    default:
      return state;
  }
};

export default getDateReducer;
