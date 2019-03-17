import { config } from "../../config";

const logo1 = {
    github: "[FROM INIT] Github.png"
};

const logo2 = {
    linkedIn: "[FROM INIT] Linkedin.png"
};

const initialState = {
    github: "",
    linkedIn: "",
    endurance: "",
    fintech: "",
    isro: "",
    synapse: "",
    agariaHeetRakshak: ""
};

export const actionType = {
    GET_LOGOS: "[Logos] Get Logos",
    UPDATE_LOGOS: "[Logos] Update Logos"
};

export const actions = {
    getLogos(){
        return {
            type: actionType.GET_LOGOS
        };
    },
    updateLogos(payload){
        return {
            type: actionType.UPDATE_LOGOS,
            payload: payload
        }
    }
}

export function logosReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_LOGOS:
            return {
                ...state,
                github: config.BackendEndpoint + action.payload.github,
                linkedIn: config.BackendEndpoint + action.payload.linkedIn,
                endurance: config.BackendEndpoint + action.payload.endurance,
                fintech: config.BackendEndpoint + action.payload.fintech,
                isro: config.BackendEndpoint + action.payload.isro,
                synapse: config.BackendEndpoint + action.payload.synapse,
                agariaHeetRakshak: config.BackendEndpoint + action.payload.agariaHeetRakshak
            };
        default:
            return state;
    }
}





