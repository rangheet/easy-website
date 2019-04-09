
const projetct1 = {
    title: "",
    company: "",
    technologies: [],
    projectDescription: [] 
};

const projetct2 = {
    title: "PT12",
    company: "DA_IICT",
    technologies: "T!T@",
    projectDescription: "DESC2" 
};

const initialState = {
    personalProjects:[],
    academicProjects: []
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
                personalProjects: action.payload.personalProjects,
                academicProjects: action.payload.academicProjects
            };
        default:
            return state;
    }
}





