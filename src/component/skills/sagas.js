import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const skillsSagas = [
    takeEvery(actionType.GET_SKILLS, getSkills)
];


function* getSkills(){

    try{
        const skills = yield call(() => api.get(`${config.BackendEndpoint}api/Skills`));
        yield put(actions.updateSkills(skills));
    }
    catch(error)
    {
        console.error("Exception in skills sagas", error);
    }
}
