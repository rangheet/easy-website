import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";
import { forEach } from "lodash";

export const skillsSagas = [
    takeEvery(actionType.GET_SKILLS, getSkills)
];


function* getSkills(){

    try{
        const skills = yield call(() => api.get(`${config.BackendEndpoint}api/Skills`));
        yield put(actions.updateSkills(segregateSkills(skills)));
    }
    catch(error)
    {
        console.error("Exception in skills sagas", error);
    }
}


function segregateSkills(skills){

    let languageSkills = [], webTechSkills = [], PMSkills = [], DevOpsTools = [];

    forEach(skills, (skill)=> {
        if(skill.category==="Language")        
            languageSkills.push(skill);
        else if(skill.category==="PM")
            PMSkills.push(skill);
        else if(skill.category==="WebTech")
            webTechSkills.push(skill);
        else
            DevOpsTools.push(skill);
    });

    return {
        languageSkills,
        webTechSkills,
        PMSkills,
        DevOpsTools
    };
}