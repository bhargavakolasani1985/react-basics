import React from "react";

function InlineStyleRender(){
    const myStyle = {
        fontSize: '40px',
        fontFamily: 'Courier New',
        color: 'Green'
    }
    return(
        <div style={myStyle}>
            Inline Style Render
        </div>
    )
}

export default InlineStyleRender;