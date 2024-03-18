import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState!==this.state){
            return true;
        }
        return false;
    }

    render(){
        console.log("Button rendered");
        return (
            <button onClick={this.props.handleSubmit} type="submit">
                Submit
            </button>
        );
    }
}

export default Button;