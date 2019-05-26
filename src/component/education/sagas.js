import { call, takeEvery, put, select } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";
import { services } from "../../services";


export const educationSagas = [
    takeEvery(actionType.GET_EDUCATION, getEducation)
];


function* getEducation(){

    try{
        const mainState = yield select(state => state.main);
        const education = (yield services.GetWebsiteData(mainState)).education;
        yield put(actions.updateEducation(JSON.parse(education)));
    }
    catch(error)
    {
        console.error("Exception in education sagas", error);
    }
}
