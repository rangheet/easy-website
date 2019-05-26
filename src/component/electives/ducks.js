
export const initialState = {
    electives:[]
};

export const actionType = {
    GET_ELECTIVES: "[Electives] Get Electives",
    UPDATE_ELECTIVES: "[Electives] Update Electives"
};

export const actions = {
    getElectives(){
        return {
            type: actionType.GET_ELECTIVES
        };
    },
    updateElectives(payload){
        return {
            type: actionType.UPDATE_ELECTIVES,
            payload: payload
        }
    }
}

export function electivesReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_ELECTIVES:
            return {
                ...state,
                electives: action.payload
            };
        default:
            return state;
    }
}





