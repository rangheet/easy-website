import { call, takeEvery, put, select } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const electivesSagas = [
    takeEvery(actionType.GET_ELECTIVES, getElectives)
];


function* getElectives(){

    try{
        const mainState = yield select(state => state.main);
        const electives = yield call(() => api.get(`${config.BackendEndpoint}api/Electives`, mainState));
        yield put(actions.updateElectives(electives));
    }
    catch(error)
    {
        console.error("Exception in electives sagas", error);
    }
}
