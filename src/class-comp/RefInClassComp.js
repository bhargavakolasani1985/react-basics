import React, { Component } from "react";

class RefInClassComp extends Component{

    constructor(){
        super();
        this.inputRef = React.createRef();
    }

    /*
    componentDidMount(){
        this.inputRef.current.focus();
    }*/

    handleInput = () => {
        this.inputRef.current.focus();
    }

    render(){
        return(
            <div>
                <h1>Ref for Input Field</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.handleInput}>Click</button>
            </div>
        )
    }
}

export default RefInClassComp;