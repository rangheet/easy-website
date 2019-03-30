import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const extracurricularSagas = [
    takeEvery(actionType.GET_EXTRACURRICULAR, getExtracurricular)
];


function* getExtracurricular(){

    try{
        const extracurricular = yield call(() => api.get(`${config.BackendEndpoint}api/Extracurricular`));
        yield put(actions.updateExtracurricular(extracurricular));
    }
    catch(error)
    {
        console.error("Exception in extracurricular sagas", error);
    }
}
