import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map } from "lodash";

class Projects extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getProjects();
    }

    render()
    {
        let projects=this.props.projects.allProjects;
        return (
            <div>
                <h2>Projects: </h2>
                {map(projects,(project,index) => <Fragment key={index.toString()}> 
                                                            <h4>Project: {project.projectTitle}</h4> <br/>
                                                            Institute: {project.company} <br/>
                                                            Technologies Used: {
                                                                map(project.technologies,(tech, idx)=>{
                                                                    return <li key={idx}>{tech}</li>;
                                                                })} <br/>
                                                            Description: {project.projectDescription}
                                                        </Fragment>)}
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { projects: state.projects }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getProjects: () => dispatch(actions.getProjects()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);