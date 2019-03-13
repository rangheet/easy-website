import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { formatDate } from "../../util";
import { map } from "lodash";

class Experiences extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getExperiences();
    }

    render()
    {
        let experiences=this.props.experiences.allExperiences;
        return (
            <div id="Experiences">
                <h2><a href="#Experiences">Experiences:</a></h2>
                {map(experiences,(experience,index) => <Fragment key={index.toString()}> 
                                                            <h4>Company: {experience.companyName}</h4> <br/>
                                                            Position: {experience.position} <br/>
                                                            StartTime: {formatDate(experience.startTime)} <br/>
                                                            EndTime: {formatDate(experience.endTime)} <br/>
                                                            MentorName: {experience.mentorName} <br/>
                                                            MentorContact: {experience.mentorContact} <br/>
                                                            WorkDescription: {experience.workDescription} <br/>
                                                        </Fragment>)}
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { experiences: state.experiences }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getExperiences: () => dispatch(actions.getExperiences()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Experiences);