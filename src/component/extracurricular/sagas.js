import { call, takeEvery, put, select } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";
import { services } from "../../services";


export const extracurricularSagas = [
    takeEvery(actionType.GET_EXTRACURRICULAR, getExtracurricular)
];


function* getExtracurricular(){

    try{
        const mainState = yield select(state => state.main);
        const extracurricular = (yield services.GetWebsiteData(mainState)).extracurricular;
        yield put(actions.updateExtracurricular(JSON.parse(extracurricular)));
    }
    catch(error)
    {
        console.error("Exception in extracurricular sagas", error);
    }
}
