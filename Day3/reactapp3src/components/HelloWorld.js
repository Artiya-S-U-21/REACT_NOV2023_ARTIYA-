import React,{ Component } from "react";

class HelloWorld extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            name:"John"
        };
    }

    render()
    {
        return (
            <div>
                <h1>Hello, world! {this.state.name}</h1>
            </div>
        );
    }
}

export default HelloWorld;