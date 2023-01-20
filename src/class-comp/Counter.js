import React, { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState(
            (prevState) => ({
                count: prevState.count+1
            })
        );
        
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return ( 
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        );
    }
}

export default Counter;