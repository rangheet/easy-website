
import { takeEvery, put, call, select } from "redux-saga/effects";
import { actionType, actions } from "./ducks";
import { api } from "../../api";
import { config } from "../../config";
import { services } from "../../services";

export const mainComponentSagas = [
    takeEvery(actionType.GET_USER_WEBSITE_DATA, getWebsiteData)
];


function* getWebsiteData(action)
{
    // const mainState = yield select(state => ({username: state.username}));
    const websiteData = yield services.GetWebsiteData(action.payload);

    for(let key in websiteData)
    {
        if(key!=="username")
        {
            websiteData[key] = JSON.parse(websiteData[key]);
        }
    }

    yield put(actions.setUserWebsiteData(websiteData));
}