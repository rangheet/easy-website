import React, { Component} from "react";
import { store } from "../store/index";
import { getPersonalInfoAction } from "./ducks";

class PersonalInfo extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        store.subscribe(() => console.log('Look ma, Redux!!'))
        console.log("In Component did mount.");
        store.dispatch(getPersonalInfoAction());
    }

    render()
    {
        const currentState=store.getState().personalInfoReducer;
        console.log("CurrentState ", currentState);
        return (
            <div>
                Name: {currentState.name} 
                Occupation: {currentState.job}
            </div>
        );
    }
}


export default PersonalInfo;