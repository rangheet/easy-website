
const experience1 = {
    company: 'Endurance',
    position: 'SE',
    duration: '2 mos',
    companyLogo: {},
    workDescription: []
};

const experience2 = {
    company: 'Fintech',
    position: 'SE',
    duration: '8 mos',
    companyLogo: {},
    workDescription: []
};

const initialState = {
    allExperiences:[]
};

export const actionType = {
    GET_EXPERIENCES: "[Experiences] Get Experiences",
    UPDATE_EXPERIENCES: "[Experiences] Update Experiences"
};

export const actions = {
    getExperiences(){
        return {
            type: actionType.GET_EXPERIENCES
        };
    },
    updateExperiences(payload){
        return {
            type: actionType.UPDATE_EXPERIENCES,
            payload: payload
        }
    }
}

export function experiencesReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_EXPERIENCES:
            return {
                ...state,
                allExperiences: action.payload
            };
        default:
            return state;
    }
}





