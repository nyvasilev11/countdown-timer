import GetDateReducer from "./GetDateReducer";
import GetTimeReducer from "./GetTimeReducer";
import EventNameReducer from "./EvetNameReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  date: GetDateReducer,
  clock: GetTimeReducer,
  eventName: EventNameReducer
});

export default allReducers;
