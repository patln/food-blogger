import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Hello"
        }
    }


    render(){
        return (
            <React.Fragment>
                <h1>{this.props.title}</h1>
                <button onClick={() => this.props.clicker()}></button>
            </React.Fragment>
        )
    }
}

export default Header;