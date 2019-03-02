import React, { Component} from "react";
import { actions } from "./ducks";
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
                
                <img id="profile-image" src={this.props.personalInfo.profileImage} alt="Profile Image" ></img>  <br/>
                Name: {this.props.personalInfo.name} <br/>
                Occupation: {this.props.personalInfo.occupation} <br/>
                Company: {this.props.personalInfo.company} <br/>
                Date of Birth: {this.props.personalInfo.dateOfBirth} <br/>
                Bio: {this.props.personalInfo.bio} <br/>
                {/* LinkedIn: {this.props.personalInfo.linkedIn} <br/> */}
                <a href={this.props.personalInfo.linkedIn} target="_blank" ref="noopener">LinkedIn</a> <br/>
            </div>
        );
    }
    
}

function mapStateToProps(state)
{
    return { personalInfo: state.personalInfoReducer };
}

function mapDispatchToProps(dispatch)
{
    return { getPersonalInfo: () => dispatch(actions.getPersonalInfoAction()) };
}

const PersonalInfoClass = connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);

export default PersonalInfoClass;