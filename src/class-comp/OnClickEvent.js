import React, { Component } from "react";

class OnClickEvent extends Component{

    constructor(){
        super();
        this.state = {
            msg: "Hello Welcome..."
        }
    }

    handleOnClick(){
        console.log("handleOnClick"+this);
        /*
        this.setState({
            msg: "Clicked..."
        });*/
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.handleOnClick}>Click</button>
            </div>
        )
    }
}

export default OnClickEvent;