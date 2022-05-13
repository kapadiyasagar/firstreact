import React, { Component } from 'react';

class Time extends Component {

    constructor(props){
        super(props);

        this.state={
            time:new Date()  //1 constructior set initial value
        }
    }

    render() {
        return (
            <div>
                {this.state.Time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Time;