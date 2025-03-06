import React, {Component} from "react";

export default class UserInfo extends Component {
    render() {
        const name = "Drayton";
        const profession = "Technician Specialist"

        return <div>
            <p>"Hello {name}! Your profession is {profession}"</p>
            <p>Here's a random number: {Math.floor(Math.random()*10)}</p>
            <button onClick={this.props.handleClick}>Click Me</button>
        </div>;
    }
}