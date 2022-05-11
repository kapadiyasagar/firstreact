import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);



        this.state = {
            time: new Date()     //1constructior set initial value
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
        console.log("tick");
    }


    //3 use this methos for requst data to server

    componentDidMount = () => {
        this.timeId = setInterval(() => this.tick(), 1000)
    }

    // 4 
    componentDidUpdate =(prevprops,prevstate)=>{
        if(prevstate.time !== this.state.time){
            console.log("componentDidUpdate is called")
        }
    }

    //5 componet will umout  used to realse resourse from compontent
    componentWillUnmount = () => {
        clearInterval(this.timeId);
    }


    render() {
        // 2 call render method each time when state value change
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}



export default Time;