import React from "react";

function PersonDetailsRender(props){

    return(
        <div>
            <h2>Name: {props.person.name},  Age:{props.person.age}</h2>
        </div>
    )
}

export default PersonDetailsRender;