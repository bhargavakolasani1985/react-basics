import React from "react";

function NameListRender(){

    const nameList = ["Bhargava", "Suresh", "Naresh"];
    const names = nameList.map(name => <h2>{name}</h2>);
    return(
        /*
        <div>
            
            <h2>{nameList[0]}</h2>
            <h2>{nameList[1]}</h2>
            <h2>{nameList[2]}</h2>
            
        </div>
        */
       <div>
        <h1>NameListRender...</h1>
        {names}
       </div>
    )

}

export default NameListRender;