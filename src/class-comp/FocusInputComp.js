import React, { Component } from "react";
import InputClassComp from "./InputClassComp";

class FocusInputComp extends Component{

    constructor(){
        super();  
        this.compRef = React.createRef();
        console.log("FocusInputComp: constructor()");
    }

    /*
    componentDidMount(){
        this.inputRef.current.focus();
    }*/

    static getDerivedStateFromProps(props, state){
        console.log("FocusInputComp: getDerivedStateFromProps");
        return state;
    }

    componentDidMount(){
        console.log("FocusInputComp: componentDidMount");
    }

    handleInput = () => {
        this.compRef.current.focusNone();
    }

    render(){
        console.log("FocusInputComp: render()");
        return(
            <div>
                <h1>Ref for Input Field</h1>
                <InputClassComp ref={this.compRef} />
                <button onClick={this.handleInput}>Click</button>
            </div>
        )
    }
}

export default FocusInputComp;