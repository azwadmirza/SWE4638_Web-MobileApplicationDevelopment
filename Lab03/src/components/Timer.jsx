import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {hours:0,minutes:0,seconds:0};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        const {hours,minutes,seconds} = this.state;
        if(seconds+1 === 60){
            this.setState({seconds:0});
            if(minutes+1 === 60){
                this.setState({minutes:0});
                this.setState({hours:hours+1});
            }else{
                this.setState({minutes:minutes+1});
            }
        }
        else{
            this.setState({seconds:seconds+1});
        }
    }

    render(){
        return (
            <div>
                <h2>Timer: {this.state.hours<10?"0"+this.state.hours:this.state.hours}:{this.state.minutes<10?"0"+this.state.minutes:this.state.minutes}:{this.state.seconds<10?"0"+this.state.seconds:this.state.seconds}</h2>
            </div>
        );
    }
}

export default Clock;