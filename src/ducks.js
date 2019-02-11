import { combineReducers } from "redux";
import { personalInfoReducer } from "./personal-info/ducks";

export const reducer = combineReducers({personalInfoReducer: personalInfoReducer});
