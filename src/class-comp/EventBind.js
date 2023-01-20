import React, { Component } from "react";

class EventBind extends Component{

    constructor(){
        super();
        this.state = {
            msg: "Hello Welcome..."
        }
        this.handleClickEvent = this.handleClickEvent.bind(this);
    }

    handleClickEvent(){
        console.log(this);
        this.setState(
            {
                msg: "Button Clicked..."
            }
        )
    }

    render(){
        return(
            <div>
                <h1>Event Bind</h1>
                <h1>{this.state.msg}</h1>
                <button onClick={this.handleClickEvent}>Click</button>
            </div>
        )
    }
}

export default EventBind;