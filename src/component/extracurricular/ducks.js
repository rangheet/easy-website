

export const initialState = {
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





