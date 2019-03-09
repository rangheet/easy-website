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
        yield put(actions.updateProjects(projects));
    }
    catch(error)
    {
        console.error("Exception in projects sagas", error);
    }
}
