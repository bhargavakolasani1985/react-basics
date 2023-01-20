import React, { Component } from "react";

class FormComp extends Component{

    constructor(){
        super();
        this.state = {
            name: "Bhargava",
            address: "20516 Horned Owl Trl",
            course: "maths"
        }
    }

    handleNameChange = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    handleAddressChange = (event) => {
        this.setState(
            {
                address: event.target.value
            }
        )
    }

    handleCourseChange = (event) => {
        this.setState(
            {
                course: event.target.value
            }
        )
    }

    handleSubmit = (event) => {
        alert(`Name: ${this.state.name} 
            Address: ${this.state.address} 
            Course: ${this.state.course}` );
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>React Form Handling</h1>
                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label>Address</label>
                    <textarea value={this.state.address} onChange={this.handleAddressChange}/>
                </div>
                <div>
                    <label>Course</label>
                    <select value={this.state.course} onChange={this.handleCourseChange}>
                        <option value="maths">Maths</option>
                        <option value="computers">Computers</option>
                        <option value="english">English</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default FormComp;