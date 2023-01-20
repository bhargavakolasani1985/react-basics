import React from "react";

function DestructureProps({name, age}){
    //const {name, age} = props;
    return(
        <div>
            <h1>DestructureProps...</h1>
            <h1>Props= {name}  :  {age}</h1>
        </div>
    )
}

export default DestructureProps;