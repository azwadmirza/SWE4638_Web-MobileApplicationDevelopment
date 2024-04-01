import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps){
        const {handleSubmit:currentChange}=this.props;
        const {handleSubmit:nextChange}=nextProps;
        if(currentChange===nextChange){
            return false;
        }
        return true;
    }

    render(){
        console.log("Button rendered");
        const {handleSubmit}=this.props;
        return (
            <button onClick={handleSubmit} type="submit">
                Submit
            </button>
        );
    }
}

export default Button;