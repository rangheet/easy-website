import { combineReducers } from "redux";
import { experiencesReducer } from "./component/experiences/ducks";

export const reducer = combineReducers({experiencesReducer: experiencesReducer});