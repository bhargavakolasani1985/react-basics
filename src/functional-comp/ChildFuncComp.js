import React from "react";

function ChildFuncComp(props){
    return(
        <div>
            <h1>Child Comp</h1>
            <button onClick={() => props.handleParent("Child Value")}>Click</button>
        </div>
    )
}

export default ChildFuncComp;