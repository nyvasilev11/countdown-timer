export const getDateAction = date => {
  return {
    type: "calendar",
    payload: date
  };
};

export const getTimeAction = time => {
  return {
    type: "clock",
    payload: time
  };
};

export const getEventName = name => {
  return {
    type: "name",
    payload: name
  };
};
