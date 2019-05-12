
import { takeEvery, put, call, select } from "redux-saga/effects";
import { actionType, actions } from "./ducks";
import { api } from "../../api";
import { config } from "../../config";
import { services } from "../../services";

export const mainComponentSagas = [
    takeEvery(actionType.GET_USER_WEBSITE_DATA, getWebsiteData)
];


function* getWebsiteData()
{
    console.log("getWebsiteData called");
    const mainState = yield select(state => state.main);
    const websiteData = yield services.GetWebsiteData(mainState);
    console.log("FROM MAIN COMPINENT", websiteData);
    yield put(actions.setUserWebsiteData(websiteData));
}