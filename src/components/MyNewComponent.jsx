import React, {Component} from "react";

class MyNewComponent extends Component{
    render(){
        const {fullName, age, hairColor} = this.props
        return(
            <div class="PersonCard">
                <div class="card">
                    <h1>Full Name: {fullName} </h1>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor}</p>
                </div>
            </div>
        )
    }
}

export default MyNewComponent;