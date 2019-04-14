
const elective1 = {
    name: "E1",
    courseCode: "IT-105",
    institute: "DA-IICT",
};

const elective2 = {
    name: "E2",
    courseCode: "IT-110",
    institute: "DA-IICT",
};

const initialState = {
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





