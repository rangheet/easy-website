import { takeEvery, put, call } from "redux-saga/effects";
import { actionType, actions } from "./ducks";
import { api } from "../../api";
import { config } from "../../config";

export const personalInfoSagas = [
    takeEvery(actionType.READ_PERSONALINFO, getPersonalInfo)
];

function* getPersonalInfo()
{
    try
    {
        let personalInfo = yield call(() => api.get(`${config.BackendEndpoint}api/PersonalInfo`));

        //API call failed. Use stub data.
        if(personalInfo==="Error!")
        {
            personalInfo = {
                bio: "I am HEET DAVE a.k.a. Sherlock. I am currently working at Endurance International Group as a Software Engineer. I am working on developing our new product using ReactJS and Java SpringBoot. I have experience with working on both front-end and back-end as well as CI/CD tools such as Docker and Jenkins. I did my undergraduate studies from DA-IICT, Gujarat. I have also worked in fields Information Retrieval, Machine Learning and Natural Language Processing during my internship at Indian Space Research Organization (ISRO).",
                company: "Endurance International Group",
                dateOfBirth: "856377000000",
                name: "Heet Dave",
                occupation: "Software Engineer",
                profileImage: "Sherlock Icon.png",
                resume: "HeetDave_Resume.pdf"
            };
        }
        yield put(actions.updatePersonalInfoAction(personalInfo));
    }
    catch(error)
    {
        console.error("Exception in personal-info saga", error);
    }

}