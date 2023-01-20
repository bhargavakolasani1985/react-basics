import React, { Component } from "react";
import ChildClassComp from './ChildClassComp';

class ParentClassComp extends Component{

    constructor(){
        super();
        this.state = {
            msg: "Method Props"
        };
        //this.handleParent = this.handleParent.bind(this);
    }

    handleParent(childValue){
        alert('Parent: '+childValue);
    }

    render(){
        return(
            <div>
                <h1>Parent Comp</h1>
                <ChildClassComp handleParent={this.handleParent}/>
            </div>
        )
    }
}

export default ParentClassComp;