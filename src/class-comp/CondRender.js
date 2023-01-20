import React, { Component } from "react";

class CondRender extends Component{

    constructor(){
        super();
        this.state = {
            isGuest: true
        }
    }
    render() {
        /*
        if(this.state.isGuest){
            return <div><h1>Welcome Guest...</h1></div>
        }
        else{
            return <div><h1>Welcome Bhargava...</h1></div>
        }
        */

        /*
        let result;
        if(this.state.isGuest){
            result = <div><h1>Welcome Guest...</h1></div>
        }
        else{
            result = <div><h1>Welcome Bhargava...</h1></div>
        }
        return result;
        */

        /*
        return this.state.isGuest ? <div><h1>Welcome Guest...</h1></div> : <div><h1>Welcome Bhargava...</h1></div>
        */

        return (this.state.isGuest && <div><h1>Welcome Guest...</h1></div>)
        || (!this.state.isGuest && <div><h1>Welcome Bhargava...</h1></div>);
    }
}

export default CondRender;