
const projetct1 = {
    title: "PT1",
    company: "DA_IICT",
    technologies: "T!T@",
    projectDescription: "DESC1" 
};

const projetct2 = {
    title: "PT12",
    company: "DA_IICT",
    technologies: "T!T@",
    projectDescription: "DESC2" 
};

const initialState = {
    allProjects:[ projetct1, projetct2 ]
};

export const actionType = {
    GET_PROJECTS: "[Projects] Get Projects",
    UPDATE_PROJECTS: "[Projects] Update Projects"
};

export const actions = {
    getProjects(){
        return {
            type: actionType.GET_PROJECTS
        };
    },
    updateProjects(payload){
        return {
            type: actionType.UPDATE_PROJECTS,
            payload: payload
        }
    }
}

export function projectsReducer(state = initialState, action){
    switch(action.type)
    {
        case actionType.UPDATE_PROJECTS:
            return {
                ...state,
                allProjects: action.payload
            };
        default:
            return state;
    }
}





