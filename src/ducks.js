import { combineReducers } from "redux";
import { experiencesReducer } from "./component/experiences/ducks";
import { personalInfoReducer } from "./component/personal-info/ducks";
import { projectsReducer } from "./component/projects/ducks";
import { educationReducer } from "./component/education/ducks";
import { extracurricularReducer } from "./component/extracurricular/ducks";
import { electivesReducer } from "./component/electives/ducks";
import { skillsReducer } from "./component/skills/ducks";
import { logosReducer } from "./component/logos/ducks";

export const reducer = combineReducers({
    personalInfo: personalInfoReducer,
    experiences: experiencesReducer, 
    projects: projectsReducer,
    education: educationReducer,
    extracurricular: extracurricularReducer,
    electives: electivesReducer,
    skills: skillsReducer,
    logos: logosReducer
});