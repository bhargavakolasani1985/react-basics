import React from "react";


function handleClick(){
    console.log("Clicked...");
}

function ClickEvent(){
    

    return(
        <div>
            <button onClick={() => handleClick()}>Click</button>
        </div>
    )
}



export default ClickEvent;