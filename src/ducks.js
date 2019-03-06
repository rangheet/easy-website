import { combineReducers } from "redux";
import { experiencesReducer } from "./component/experiences/ducks";
import { personalInfoReducer } from "./component/personal-info/ducks";

export const reducer = combineReducers({personalInfo: personalInfoReducer, experiences: experiencesReducer});