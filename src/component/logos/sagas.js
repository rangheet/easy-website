import { call, takeEvery, put, select } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";
import { services } from "../../services";


export const logosSagas = [
    takeEvery(actionType.GET_LOGOS, getLogos)
];


function* getLogos(){

    try{
        const mainState = yield select(state => state.main);
        const logos = (yield services.GetWebsiteData(mainState)).logos;
        yield put(actions.updateLogos(JSON.parse(logos)));
    }
    catch(error)
    {
        console.error("Exception in logos sagas", error);
    }
}
