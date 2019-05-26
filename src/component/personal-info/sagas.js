import { takeEvery, put, call, select } from "redux-saga/effects";
import { actionType, actions } from "./ducks";
import { api } from "../../api";
import { config } from "../../config";
import { services } from "../../services";

export const personalInfoSagas = [
    takeEvery(actionType.READ_PERSONALINFO, getPersonalInfo)
];

function* getPersonalInfo()
{
    try
    {
        const mainState = yield select(state => state.main);
        const personalInfo = (yield services.GetWebsiteData(mainState)).personalInfo;
        yield put(actions.updatePersonalInfoAction(JSON.parse(personalInfo)));
    }
    catch(error)
    {
        console.error("Exception in personal-info saga", error);
    }

}