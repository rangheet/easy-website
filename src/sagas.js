import { personalInfoSaga } from "../src/component/personal-info/sagas";
import { experiencesSagas } from "../src/component/experiences/sagas";
import { all } from "redux-saga/effects";

const saga = [
    ...personalInfoSaga,
    ...experiencesSagas
];

export function* ParentWatcherSaga()
{
    yield all(saga);
}

