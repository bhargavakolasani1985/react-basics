import React from "react";

function FragmentDemo(){

    const nameList = ['Bhargava', 'Suresh', 'Ramesh'];
    let nameDetails = nameList.map(name => <React.Fragment key={name}><h1>{name}</h1><h1>-</h1></React.Fragment>)
    return(
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>Fragments let us allow to combine the list of children components witout adding new nodes to the DOM</p>
            {nameDetails}
        </React.Fragment>
    )
}

export default FragmentDemo;