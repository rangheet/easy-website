import { takeEvery, put, call, select } from "redux-saga/effects";
import { actionType, actions } from "./ducks";
import { api } from "../../api";
import { config } from "../../config";
import { services } from "../../services";

export const submitWebsiteDataSagas = [
    takeEvery(actionType.SUBMIT_WEBSITE_DATA, submitWebsiteData)
];

function* submitWebsiteData(action)
{
    try {
        services.SubmitWebsiteData(action.payload);
    } catch (error) {
        console.error("Error in submitWebsiteData saga");
    }
}