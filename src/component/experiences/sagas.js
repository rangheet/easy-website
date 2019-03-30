import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const experiencesSagas = [
    takeEvery(actionType.GET_EXPERIENCES, getExperiences)
];


function* getExperiences(){

    try{
        const experiences = yield call(() => api.get(`${config.BackendEndpoint}api/Experiences`));
        yield put(actions.updateExperiences(experiences));
    }
    catch(error)
    {
        console.error("Exception in experiences sagas", error);
    }
}
