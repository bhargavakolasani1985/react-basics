import React, { Component } from "react";

class CompBLifeCycle extends Component{

    constructor(){
        super();
        console.log("CompBLifeCycle: constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("CompBLifeCycle: getDerivedStateFromProps");
        return state;
    }

    render(){
        console.log("CompBLifeCycle: render");
        return(
            <h1>CompB</h1>
        )
    }

    componentDidMount(){
        console.log("CompBLifeCycle: componentDidMount");
    }
}

export default CompBLifeCycle;