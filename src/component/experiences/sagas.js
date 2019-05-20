import { call, takeEvery, put, select } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";
import { services } from "../../services";

export const experiencesSagas = [
    takeEvery(actionType.GET_EXPERIENCES, getExperiences)
];


function* getExperiences(){

    try{
        const mainState = yield select(state => state.main);
        const experiences = (yield services.GetWebsiteData(mainState)).experiences;
        yield put(actions.updateExperiences(JSON.parse(experiences)));
    }
    catch(error)
    {
        console.error("Exception in experiences sagas", error);
    }
}
