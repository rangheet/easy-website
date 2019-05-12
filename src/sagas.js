import { personalInfoSagas } from "./component/personal-info/sagas";
import { experiencesSagas } from "./component/experiences/sagas";
import { projectsSagas } from "./component/projects/sagas";
import { educationSagas } from "./component/education/sagas";
import { extracurricularSagas } from "./component/extracurricular/sagas";
import { electivesSagas } from "./component/electives/sagas";
import { skillsSagas } from "./component/skills/sagas";
import { logosSagas } from "./component/logos/sagas";
import { mainComponentSagas } from "./component/main-component/sagas";
import { all } from "redux-saga/effects";

const saga = [
    // ...personalInfoSagas,
    // ...experiencesSagas,
    // ...projectsSagas,
    // ...educationSagas,
    // ...extracurricularSagas,
    // ...electivesSagas,
    // ...skillsSagas,
    // ...logosSagas,
    ...mainComponentSagas
];



export function* ParentWatcherSaga()
{
    yield all(saga);
}

