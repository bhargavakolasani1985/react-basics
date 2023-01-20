import React from "react";

function FunctionProps(props){
    return(
        <div>
            <h1 className="error">{props.children}</h1>
            <h1>Function Properties are, {props.name}:{props.age}</h1>
        </div>
        
    )
}

export default FunctionProps;