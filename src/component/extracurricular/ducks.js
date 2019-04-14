
const extracurricularActivity1 = {
    organization: "Agaria Heet Rakshak Manch",
    timeOfActivity: "Dec 2015",
    position: "Volunteer",
    workDescription: "Volunteer work",
    state: "Gujarat",
    country: "India"
};

const extracurricularActivity2 = {
    organization: "Synapse",
    timeOfActivity: "2016-2017",
    position: "Core committee member",
    workDescription: "Synapse work",
    state: "Gujarat",
    country: "India"
};


const initialState = {
    extracurricular: []
};

export const actionType = {
    GET_EXTRACURRICULAR: "[Extracurricular] Get Extracurricular",
    UPDATE_EXTRACURRICULAR: "[Extracurricular] Update Extracurricular"
};

export const actions = {
    getExtracurricular(){
        return {
            type: actionType.GET_EXTRACURRICULAR
        };
    },
    updateExtracurricular(payload){
        return {
            type: actionType.UPDATE_EXTRACURRICULAR,
            payload: payload
        }
    }
}

export function extracurricularReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_EXTRACURRICULAR:
            return {
                ...state,
                extracurricular: action.payload
            };
        default:
            return state;
    }
}





