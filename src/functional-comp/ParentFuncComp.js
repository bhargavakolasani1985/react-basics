import React from "react";
import ChildFuncComp from './ChildFuncComp';

function handleParent(childValue){
    alert(`Parent Called from Child: ${childValue}`);
}

function ParentFuncComp(){
    return(
        <div>
            <h1>Parent</h1>
            <ChildFuncComp handleParent = {handleParent}/>
        </div>
    )
}

export default ParentFuncComp;