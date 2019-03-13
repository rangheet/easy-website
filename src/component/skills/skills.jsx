import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";
import { map } from "lodash";

class Skills extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getSkills();
    }

    render()
    {
        let skills=this.props.skills.skills;
        return (
            <div>
                <h2>Skills: </h2>
                {map(skills,(skill,index) => <Fragment key={index.toString()}> 
                                                            <h4>Skills: {skill.name}</h4> <br/>
                                                            RatingOutOf10: {skill.ratingOutOf10} <br/>
                                                        </Fragment>)}
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { skills: state.skills }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getSkills: () => dispatch(actions.getSkills()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);