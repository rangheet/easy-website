

export const initialState = {
    education: []
};

export const actionType = {
    GET_EDUCATION: "[Education] Get Education",
    UPDATE_EDUCATION: "[Education] Update Education"
};

export const actions = {
    getEducation(){
        return {
            type: actionType.GET_EDUCATION
        };
    },
    updateEducation(payload){
        return {
            type: actionType.UPDATE_EDUCATION,
            payload: payload
        }
    }
}

export function educationReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_EDUCATION:
            return {
                ...state,
                education: action.payload
            };
        default:
            return state;
    }
}





