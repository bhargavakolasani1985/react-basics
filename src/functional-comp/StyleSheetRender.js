import React from "react"; 
import './myStyle.css'


function StyleSheetRender(props){
    const isPrimary = props.isPrimary ? "primary" : "";
     
    return(
        /*
        <div>
            <h1  className="primary font-xl font-style">Style sheet Render</h1>
        </div>
        */
        <div>
            <h1 className={`${isPrimary} font-xl font-style`}>Style sheet Render</h1>
        </div>
    )
}

export default StyleSheetRender;