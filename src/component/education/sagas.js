import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const educationSagas = [
    takeEvery(actionType.GET_EDUCATION, getEducation)
];


function* getEducation(){

    try{
        const education = yield call(() => api.get(`${config.BackendEndpoint}api/Education`));
        yield put(actions.updateEducation(education));
    }
    catch(error)
    {
        console.error("Exception in education sagas", error);
    }
}
