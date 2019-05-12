import { call, takeEvery, put, select } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";
import { services } from "../../services";

export const skillsSagas = [
    takeEvery(actionType.GET_SKILLS, getSkills)
];


function* getSkills(){

    try{
        const mainState = yield select(state => state.main);
        const skills = (yield services.GetWebsiteData(mainState)).skills;
        yield put(actions.updateSkills(segregateSkills(JSON.parse(skills))));
    }
    catch(error)
    {
        console.error("Exception in skills sagas", error);
    }
}


function segregateSkills(skills){

    let languageSkills = [], webTechSkills = [], PMSkills = [], DevOpsTools = [];

    skills.forEach(skill => {
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