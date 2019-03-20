import { SlowBuffer } from "buffer";
import { config } from "../../config";

const InitialState={
    name: "[From InitialState] Heet Dave",
    occupation: "[From InitialState] SE",
    dateOfBirth: "[From InitialState] 20-Feb-1997",
    company: "[From InitialState] Endurance",
    linkedIn: "[From InitialState] LINKEDINLINK",
    bio: "[From InitialState] MYBIO",
    //profileImage: null,
    github: "[From InitialState] GITHUB LINK"
};

export const actionType={
    READ_PERSONALINFO: '[Personal Info] ReadPersonalInfo',
    UPDATE_PERSONALINFO : '[Personal Info] UpdatePersonalInfo'
};

export const actions = {

    getPersonalInfoAction(){
        return {
            type: actionType.READ_PERSONALINFO
        };
    },
    updatePersonalInfoAction(payload){
        return {
            type: actionType.UPDATE_PERSONALINFO,
            payload: payload
        };
    }
};

export function personalInfoReducer(state=InitialState, action){

    switch(action.type)
    {
        case actionType.READ_PERSONALINFO:
            return {...state};

        case actionType.UPDATE_PERSONALINFO:
            return {
                ...state,
                name: action.payload.name,
                occupation: action.payload.occupation,
                dateOfBirth: action.payload.dateOfBirth,
                company: action.payload.company,
                bio: action.payload.bio,
                //profileImage: config.BackendEndpoint+action.payload.profileImage,
                linkedIn: action.payload.linkedIn,
                github: action.payload.github
            };

        default:
            return state;
    }
};