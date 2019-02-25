import { takeEvery, put, call } from "redux-saga/effects";
import { actionType, actions } from "./ducks";
import { api } from "../../api";
import { config } from "../../config";

export const personalInfoSaga = [
    takeEvery(actionType.READ_PERSONALINFO, getPersonalInfo)
];

function* getPersonalInfo()
{
    try
    {
        const personalInfo = yield call(() => api.get(`${config.BackendEndpoint}/api/PersonalInfo`));
        yield put(actions.updatePersonalInfoAction(personalInfo));
    }
    catch(e)
    {
        console.log("[ERROR] Exception in personal-info saga", e);
    }

}