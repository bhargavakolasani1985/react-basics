import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class PureCompTest extends PureComponent{

    constructor(props){
        super(props);
        this.state= {
            name: "Bhargava"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Bhargava"
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

export default PureCompTest;