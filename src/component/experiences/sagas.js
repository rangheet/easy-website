import { call, takeEvery, put } from "redux-saga/effects";
import { api } from "../../api";
import { config } from "../../config";
import { actionType, actions } from "./ducks";


export const experiencesSagas = [
    takeEvery(actionType.GET_EXPERIENCES, getExperiences)
];


function* getExperiences(){

    try{
        let experiences = yield call(() => api.get(`${config.BackendEndpoint}api/Experiences`));
        if(experiences==="Error!")
        {
            experiences = [
                {
                  "location": "Bangalore, India",
                  "startTime": "1544985000000",
                  "endTime": "",
                  "position": "Software Engineer",
                  "companyName": "Endurance International Group",
                  "mentorName": "Dhanya Angepat",
                  "mentorContact": "NA",
                  "companyLogo": {
                    "url": "https://www.endurance.com/",
                    "logoname": "Endurance",
                    "filenameOnServer": "endurance-logo.jpeg"
                  },
                  "technologies": [
                    "ReactJS",
                    "Redux",
                    "Redux-Saga",
                    "Javascript",
                    "SpringBoot",
                    "Java",
                    "Docker"
                  ],
                  "workDescription": [
                    "Designed and developed 'BE' module for invoices management according to business requirements,which is to be used by Web Professionals",
                    "Created and integrated new APIs to get data from core back-end",
                    "Add about docker secrets"
                  ]
                },
                {
                  "location": "Gandhinagar, India",
                  "startTime": "1526236200000",
                  "endTime": "1544725800000",
                  "position": "Software Engineer",
                  "companyName": "Fintech Global Center",
                  "mentorName": "Pratik Joshi",
                  "mentorContact": "NA",
                  "companyLogo": {
                    "url": "https://www.fintechglobal.center/",
                    "logoname": "FintechGlobalCenter",
                    "filenameOnServer": "fintech-global-center-logo.jpeg"
                  },
                  "technologies": [
                    "ASP.NET Web APIs",
                    "C#",
                    "Javascript",
                    "jQuery",
                    "Docker",
                    "Jenkins"
                  ],
                  "workDescription": [
                    "Developed both front-end and back-end of user management and software distribution application for financial trading platform administrators",
                    "Developed SFTP client using company's framework to send trading information securely",
                    "Setup Continuous Integration (CI) for core back-end projects"
                  ]
                },
                {
                  "location": "Ahmedabad, India",
                  "startTime": "1514887200000",
                  "endTime": "1526032800000",
                  "position": "Intern",
                  "companyName": "Indian Space Research Organization (ISR0)",
                  "mentorName": "Akhilesh Sharma",
                  "mentorContact": "NA",
                  "companyLogo": {
                    "url": "https://www.isro.gov.in/",
                    "logoname": "ISRO",
                    "filenameOnServer": "isro-logo.jpg"
                  },
                  "technologies": [
                    "Python",
                    "Natural Language Processing",
                    "Neural Network",
                    "NLTK Library",
                    "Stanford NLP Tools"
                  ],
                  "workDescription": [
                    "Developed a tool to automate SRS checking process which leverages Neural Network and NLP techniques",
                    "Used probabilistic N-gram model, POS and NER to extract features from text to train neural network"
                  ]
                }
              ];
        }
        yield put(actions.updateExperiences(experiences));
    }
    catch(error)
    {
        console.error("Exception in experiences sagas", error);
    }
}
