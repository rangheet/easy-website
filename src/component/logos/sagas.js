import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const logosSagas = [
    takeEvery(actionType.GET_LOGOS, getLogos)
];


function* getLogos(){

    try{
        const logos = yield call(() => api.get(`${config.BackendEndpoint}api/Logos`));
        yield put(actions.updateLogos(logos));
    }
    catch(error)
    {
        console.error("Exception in logos sagas", error);
    }
}
