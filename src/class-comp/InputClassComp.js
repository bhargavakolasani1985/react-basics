import React, { Component } from "react";

class InputClassComp extends Component{

    constructor(){
        super();
        console.log("InputClassComp: constructor()");
        this.inputRef = React.createRef();
    }

    /*
    componentDidMount(){
        this.inputRef.current.focus();
    }*/

    focusNone(){
        alert("focusNone");
    }

    focusInput() {
        this.inputRef.current.focus();
    }

    render(){
        console.log("InputClassComp: render()");
        return(
            <div>
                <h1>Ref for Input Field</h1>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default InputClassComp;