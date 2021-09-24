import { combineReducers } from "redux";
import updateCompletedTaskList from "./updateCompletedTaskList";

const rootReducer = combineReducers({ updateCompletedTaskList });

export default rootReducer;
