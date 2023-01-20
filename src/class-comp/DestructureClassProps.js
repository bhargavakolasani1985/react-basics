import React, { Component } from "react";

class DestructureClassProps extends Component{

    render(){
        const {name, age} = this.props;
        return(
            <div>
                <h1>Destructure Props...</h1>
                <h1>Props= {name}  :  {age}</h1>
            </div>
        )
    }
}

export default DestructureClassProps;