"use client";


import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {...props.initialTime};
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.submitted){
            nextProps.setTimeTaken(this.state);
            clearInterval(this.timerID);
            return false;
        }
        return true;
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
        if(seconds>0){
            this.setState({
                seconds:seconds-1
            });
        }
        else if(minutes>0){
            this.setState({
                seconds:59,
                minutes:minutes-1
            });
        }
        else if(hours>0){
            this.setState({
                seconds:59,
                minutes:59,
                hours:hours-1
            });
        }
        else{
            this.props.submitQuiz();
            clearInterval(this.timerID);
        }
        this.props.setTimeTaken(this.state);
    }

    render(){
        return (
            <div>
                <h2 className="text-black font-bold text-lg">Timer: {this.state.hours<10?"0"+this.state.hours:this.state.hours}:{this.state.minutes<10?"0"+this.state.minutes:this.state.minutes}:{this.state.seconds<10?"0"+this.state.seconds:this.state.seconds}</h2>
            </div>
        );
    }
}

export default Clock;