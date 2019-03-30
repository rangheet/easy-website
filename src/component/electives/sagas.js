import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const electivesSagas = [
    takeEvery(actionType.GET_ELECTIVES, getElectives)
];


function* getElectives(){

    try{
        const electives = yield call(() => api.get(`${config.BackendEndpoint}api/Electives`));
        yield put(actions.updateElectives(electives));
    }
    catch(error)
    {
        console.error("Exception in electives sagas", error);
    }
}
