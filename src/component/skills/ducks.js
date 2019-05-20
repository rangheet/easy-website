
export const initialState = {
    languageSkills: [],
    webTechSkills: [],
    PMSkills: [],
    DevOpsTools: []
};

export const actionType = {
    GET_SKILLS: "[Skills] Get Skills",
    UPDATE_SKILLS: "[Skills] Update Skills"
};

export const actions = {
    getSkills(){
        return {
            type: actionType.GET_SKILLS
        };
    },
    updateSkills(payload){
        return {
            type: actionType.UPDATE_SKILLS,
            payload: payload
        }
    }
}

export function skillsReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_SKILLS:
            return {
                ...state,
                languageSkills: action.payload.languageSkills,
                webTechSkills: action.payload.webTechSkills,
                PMSkills: action.payload.PMSkills,
                DevOpsTools: action.payload.DevOpsTools
            };
        default:
            return state;
    }
}





