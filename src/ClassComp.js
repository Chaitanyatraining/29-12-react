import { Component } from "react";

class ClassComp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2 className="text-primary bg-warning">This is class Component</h2>
                <h3>CourseName:{this.props.courseName}</h3>
            </div>
        )
    }
}

export default ClassComp