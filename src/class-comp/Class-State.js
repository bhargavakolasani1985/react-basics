import React, { Component } from "react";

class ClassState extends Component{
    
    constructor(){
        super();
        this.state = {
            message: "Welcome Class State Component..."
        }
    }

    changeMessage(){
        this.setState(
            {
                message: "Thanks for Subscribing..."
            }
        );
    }

    render(){
        return <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
            
    }
}

export default ClassState;