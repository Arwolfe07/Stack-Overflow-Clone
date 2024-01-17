import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionReducer from "./question";
import userReducer from "./allUser";
import verifyUserReducer from "./verifyUser";
import subsReducer from "./subs";
import postReducer from "./posts";
import friendReducer from "./friends";
import slideInReducer from "./slideInReducer";

export default combineReducers({ authReducer, currentUserReducer, questionReducer, userReducer, verifyUserReducer, subsReducer, postReducer, friendReducer,slideInReducer });