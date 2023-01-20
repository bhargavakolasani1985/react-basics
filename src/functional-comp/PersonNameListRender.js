import React from "react";
import PersonDetailsRender from './PersonDetailsRender';

function PersonNameListRender(){

    const persons = [
        {name: "Bhargava", age: 25},
        {name: "Suresh", age: 35},
        {name: "Ramesh", age: 45},
    ];
    const personDetails = persons.map(person => <PersonDetailsRender person={person}/>);
    return(
        <div>
            <h1>PersonNameListRender...</h1>
            {personDetails}
        </div>
    )

}

export default PersonNameListRender;