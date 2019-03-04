import { personalInfoSaga } from "../src/component/personal-info/sagas";
import { all } from "redux-saga/effects";

const saga = [
    ...personalInfoSaga
];

export function* ParentWatcherSaga()
{
    yield all(saga);
}

