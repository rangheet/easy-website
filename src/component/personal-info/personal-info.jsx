import React, { Component} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { formatDate } from "../../util";

class PersonalInfo extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getPersonalInfo();
    }

    render()
    {
        return (
            <div id="PersonalInfo" >
                <h2>Personal Info</h2>
                <img id="profile-image" src={this.props.personalInfo.profileImage} alt="Profile Image" ></img>  <br/>
                Name: {this.props.personalInfo.name} <br/>
                Occupation: {this.props.personalInfo.occupation} <br/>
                Company: {this.props.personalInfo.company} <br/>
                Date of Birth: {formatDate(this.props.personalInfo.dateOfBirth)} <br/>
                Bio: {this.props.personalInfo.bio} <br/>
                <a href={this.props.personalInfo.linkedIn} target="_blank" ref="noopener">LinkedIn</a> <br/>
            </div>
        );
    }
    
}

function mapStateToProps(state)
{
    return { personalInfo: state.personalInfo };
}

function mapDispatchToProps(dispatch)
{
    return { getPersonalInfo: () => dispatch(actions.getPersonalInfoAction()) };
}

const PersonalInfoClass = connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);

export default PersonalInfoClass;