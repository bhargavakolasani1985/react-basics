import React, { Component } from "react";
import RegFuncComp from "../functional-comp/RegFuncComp";

class RegFuncCompTest extends Component{

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
        console.log('RegFuncCompTest: render()');
        return(
            <div>
                <h1>Regular Component</h1>
                <RegFuncComp name={this.state.name}/>
            </div>
        )
    }
}

export default RegFuncCompTest;