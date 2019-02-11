
const InitialState={
    name: "Heet Dave",
    job: "SE, Endurance"
};

const actionType={
    READ_PERSONALINFO: '[Personal Info] ReadPersonalInfo'
};

export function getPersonalInfoAction(){
        return {
            type: actionType.READ_PERSONALINFO
        };
};

export function personalInfoReducer(state=InitialState, action){
    console.log("In personalInfoReducer",state, action);
    switch(action.type)
    {
        case actionType.READ_PERSONALINFO:
            return state;
        default:
            return state;
    }
};