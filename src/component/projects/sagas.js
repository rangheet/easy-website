import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";

export const projectsSagas = [
    takeEvery(actionType.GET_PROJECTS, getProjects)
];


function* getProjects(){

    try{
        const projects = yield call(() => api.get(`${config.BackendEndpoint}api/Projects`));
        yield put(actions.updateProjects(segregateProjects(projects)));
    }
    catch(error)
    {
        console.error("Exception in projects sagas", error);
    }
}

function segregateProjects(allProjects){

    let personalProjects = [], academicProjects = [];

    allProjects.forEach(project => {
        if(project.projectType==="Personal")        
            personalProjects.push(project);
        else
            academicProjects.push(project);
    });

    return {
        personalProjects,
        academicProjects
    };
}