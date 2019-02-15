
const experience1 = {
    company: 'Endurance',
    position: 'SE',
    duration: '2 mos'
};

const experience2 = {
    company: 'Fintech',
    position: 'SE',
    duration: '8 mos'
};

const initialState = {
    experiences:[ experience1, experience2 ]
};

export const actionType = {
    GET_EXPERIENCES: "[experiences] Get Experiences"
};

export const actionCreator = {

    getExperiences(){
        return {
            type: actionType.GET_EXPERIENCES
        };
    }
}

export function experiencesReducer(state = initialState, action){
    
    switch(action.actionType)
    {
        case actionType.GET_EXPERIENCES:
            return state; 
        
        default:
            return state;

    }
}





