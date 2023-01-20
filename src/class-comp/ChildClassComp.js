import React, { Component } from "react";

class ChildClassComp extends Component{

    render(){
        return(
            <div>
                <h1>Child Comp</h1>
                <button onClick={() => this.props.handleParent("Child Value")}>Click</button>
            </div>  
        )
    }
}

export default ChildClassComp;