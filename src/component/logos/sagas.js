import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const logosSagas = [
    takeEvery(actionType.GET_LOGOS, getLogos)
];


function* getLogos(){

    try{
        let logos = yield call(() => api.get(`${config.BackendEndpoint}api/Logos`));

        if(logos==="Error!")
        {
            logos = {
                "LinkedIn": {
                  "url": "https://www.linkedin.com/in/heetdave/",
                  "logoname": "LinkedIn",
                  "filenameOnServer": "In-Black-128px-TM.png"
                },
                "Email": {
                  "url": "mailto:heetdave@outlook.com",
                  "logoname": "Email",
                  "filenameOnServer": "email-logo.png"
                },
                "Github": {
                  "url": "https://github.com/rangheet",
                  "logoname": "Github",
                  "filenameOnServer": "GitHub-Mark-120px-plus.png"
                }
              };
        }
        yield put(actions.updateLogos(logos));
    }
    catch(error)
    {
        console.error("Exception in logos sagas", error);
    }
}
