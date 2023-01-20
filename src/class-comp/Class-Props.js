import React, { Component } from "react";

class ClassProps extends Component{
    
    render(){
        return <div>
                <h1>{this.props.children}</h1>
                <h1>Class Properties are, {this.props.name}: {this.props.age}</h1>
            </div>
    }
}

export default ClassProps;