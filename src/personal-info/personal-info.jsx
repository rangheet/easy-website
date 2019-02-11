import React, { Component} from "react";
import { store } from "../store/index";
import { getPersonalInfoAction } from "./ducks";
import { connect } from "react-redux";

class PersonalInfo extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        //store.subscribe(() => console.log('Look ma, Redux!!'))
        //console.log("In Component did mount.");
        this.props.getPersonalInfo();
    }

    render()
    {
        //const currentState=store.getState().personalInfoReducer;
        //console.log("CurrentState (personalInfo) ", this.props.personalInfo);
        return (
            <div>
                Name: {this.props.personalInfo.name} <br/>
                Occupation: {this.props.personalInfo.job}
            </div>
        );
    }

    
}

function mapStateToProps(state)
{
    return {personalInfo: state.personalInfoReducer};
}

function mapDispatchToProps(dispatch)
{
    return { getPersonalInfo: () => dispatch(getPersonalInfoAction()) };
}

const PersonalInfoClass = connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);

export default PersonalInfoClass;