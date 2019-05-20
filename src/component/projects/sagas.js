import { call, takeEvery, put, select } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";
import { services } from "../../services";

export const projectsSagas = [
    takeEvery(actionType.GET_PROJECTS, getProjects)
];


function* getProjects(){

    try{
        const mainState = yield select(state => state.main);
        const projects = (yield services.GetWebsiteData(mainState)).projects;
        yield put(actions.updateProjects(segregateProjects(JSON.parse(projects))));
    }
    catch(error)
    {
        console.error("Exception in projects sagas", error);
    }
}

export function segregateProjects(allProjects){

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