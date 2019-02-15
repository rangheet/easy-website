import React, { Component, Fragment} from "react";
import { actionCreator } from "./ducks";
import { connect } from "react-redux";

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
        let experiences=this.props.experiences.experiences;

        return (
            <div>
                <h3>Experiences: </h3>
                {experiences.map((experience,index) => <Fragment key={index.toString()}> <h5>Experiences {index}:</h5> <br/> 
                                                Company: {experience.company} <br/>
                                                Position: {experience.position} <br/>
                                                Duration: {experience.duration} <br/>
                                                </Fragment>)}
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { experiences: state.experiencesReducer }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getExperiences: () => dispatch(actionCreator.getExperiences()) };
}

const ExperiencesComponent = connect(mapStateToProps, mapDispatchToProps)(Experiences);

export default ExperiencesComponent;