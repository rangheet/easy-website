
import { segregateSkills } from "../skills//sagas";
import { segregateProjects } from "../projects/sagas"
import { InitialState as personalInfo } from "../personal-info/ducks";
import { initialState as education } from "../education/ducks";
import { initialState as experiences } from "../experiences/ducks";
import { initialState as logos } from "../logos/ducks";
import { initialState as projects } from "../projects/ducks";
import { initialState as skills } from "../skills/ducks";
import { initialState as extracurricular } from "../extracurricular/ducks";

extracurricular


const initialState = {
    username: "",
    personalInfo,
    education: education.education,
    experiences: experiences.experiences,
    logos,
    projects,
    skills,
    extracurricular: extracurricular.extracurricular
}

export const actionType = {
    SET_USERNAME: "[Main Component] Set Username",
    GET_USER_WEBSITE_DATA: "[Main Component] Get User Website Data",
    SET_USER_WEBSITE_DATA: "[Main Component] Set User Website Data"
}

export const actions = {
    setusername(payload)
    {
        return {
            type: actionType.SET_USERNAME,
            payload
        };
    },
    getUserWebsiteData(payload)
    {
        return {
            type: actionType.GET_USER_WEBSITE_DATA,
            payload
        }; 
    },
    setUserWebsiteData(payload)
    {
        return {
            type: actionType.SET_USER_WEBSITE_DATA,
            payload
        }; 
    }
}

export function mainReducer(state = initialState, action)
{
    switch(action.type)
    {
        case actionType.SET_USERNAME:
            return {
                ...state,
                username: action.payload.username
            };
        case actionType.SET_USER_WEBSITE_DATA:
            return {
                ...state,
                ...action.payload,
                skills: segregateSkills(action.payload.skills),
                projects: segregateProjects(action.payload.projects)
            }
        default:
            return {...state};
    }
}

