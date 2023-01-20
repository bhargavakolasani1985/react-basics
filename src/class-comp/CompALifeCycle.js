import React, { Component } from "react";
import CompBLifeCycle from './CompBLifeCycle'

class CompALifeCycle extends Component{

    constructor(props){
        super(props);
        console.log("CompALifeCycle: constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("CompALifeCycle: getDerivedStateFromProps");
        return state;
    }

    render(){
        console.log("CompALifeCycle: render");
        return(
            <div>
                <h1>CompA</h1>
                <CompBLifeCycle/>
            </div>
        )
    }

    componentDidMount(){
        console.log("CompALifeCycle: componentDidMount");
    }
}

export default CompALifeCycle;