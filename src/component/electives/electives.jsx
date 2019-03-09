import React, { Component, Fragment} from "react";
import { actions } from "./ducks";
import { connect } from "react-redux";

class Electives extends Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.getElectives();
    }

    render()
    {
        let electives=this.props.electives.electives;
        return (
            <div>
                <h2>Electives: </h2>
                {electives.map((elective,index) => <Fragment key={index.toString()}> 
                                                            <h4>Elective: {elective.name}</h4> <br/>
                                                            Elective Code: {elective.courseCode} <br/>
                                                            Institute: {elective.institute} <br/>
                                                        </Fragment>)}
            </div>
        );
    } 

}

function mapStateToProps(state)
{
    return { electives: state.electives }; 
}

function mapDispatchToProps(dispatch)
{
    return {  getElectives: () => dispatch(actions.getElectives()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Electives);