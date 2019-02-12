import { combineReducers } from "redux";
import { personalInfoReducer } from "./component/personal-info/ducks";

export const reducer = combineReducers({personalInfoReducer: personalInfoReducer});
