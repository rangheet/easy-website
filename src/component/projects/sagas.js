import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";

export const projectsSagas = [
    takeEvery(actionType.GET_PROJECTS, getProjects)
];


function* getProjects(){

    try{
        let projects = yield call(() => api.get(`${config.BackendEndpoint}api/Projects`));
        if(projects==="Error!")
        {
            projects = [
                {
                  "company": "DA-IICT",
                  "title": "Alzheimer disease detection using Neural Network",
                  "projectType": "Academic",
                  "projectDescription": [
                    "Developed Neural Network to detect Alzheimer from MRI of a brain",
                    "Used both Multilayer Perceptron (MLP) and Radial Basis Function (RBF) to detect the disease"
                  ],
                  "technologies": [
                    "Neural Network",
                    "MATLAB"
                  ]
                },
                {
                  "company": "DA-IICT",
                  "title": "Topic wise classification of news articles",
                  "projectType": "Academic",
                  "projectDescription": [
                    "Developed Naive Bayes classifier to categorize news articles according to topics",
                    "Used various NLP and Information Retrieval techniques such as Bag of Words model, normalization, Porter stemming algorithm, stopwords removal and Laplace smoothing for categorization",
                    "Achieved 0.78 F1 score with 20 Newsgroup dataset"
                  ],
                  "technologies": [
                    "Python",
                    "Information Retrieval",
                    "NLTK Library"
                  ]
                },
                {
                  "company": "DA-IICT",
                  "title": "Dynamic traffic signal timer using OpenCV",
                  "projectType": "Academic",
                  "projectDescription": [
                    "Developed a system which sets traffic signal timer dynamically according to the traffic in the lane",
                    "Used Image Processing technique like background subtraction and blob detection to detect traffic density"
                  ],
                  "technologies": [
                    "Python",
                    "Internet of Things",
                    "OpenCV"
                  ]
                },
                {
                  "company": "Sherlock Inc.",
                  "title": "Personal Website",
                  "projectType": "Personal",
                  "projectDescription": [
                    "Used ReactJS and SpringBoot to develop front-end and back-end respectively. Used redux and redux-saga to for state management and performing async tasks.",
                    "For design and layout, used Material-UI and CSS"
                  ],
                  "technologies": [
                    "ReactJS",
                    "SprintBoot",
                    "Material-UI",
                    "Javascript",
                    "HTML",
                    "CSS"
                  ]
                }
              ];
        }

        yield put(actions.updateProjects(segregateProjects(projects)));
    }
    catch(error)
    {
        console.error("Exception in projects sagas", error);
    }
}

function segregateProjects(allProjects){

    let personalProjects = [], academicProjects = [];

    allProjects.forEach(project => {
        if(project.projectType==="Personal")        
            personalProjects.push(project);
        else
            academicProjects.push(project);
    });

    return {
        personalProjects,
        academicProjects
    };
}