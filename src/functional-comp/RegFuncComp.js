import React from "react";

function RegFuncComp({name}){

    console.log("***RegFuncComp***");
    return(
        <div>
            <h1>RegFuncComp: {name}</h1>
        </div>
    )
}

export default React.memo(RegFuncComp);