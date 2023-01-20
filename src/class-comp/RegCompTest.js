import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class RegCompTest extends Component{

    constructor(props){
        super(props);
        this.state= {
            name: "Bhargava"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Bhargava Kolasani"
            })
        }, 2000);
    }

    render(){
        console.log('RegCompTest: render()');
        return(
            <div>
                <h1>Regular Component</h1>
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default RegCompTest;