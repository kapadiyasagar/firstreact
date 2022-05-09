import React, { Component } from 'react';

class Contry extends Component {

    constructor(props){
        super(props);
    
    this.state={
        contry:'india'
    };
}

changeContry=()=>{
    this.setState( {
        contry:'uk'
    });
}
 


    render() {
        return (
            <>
            <div>Contry: {this.state.contry}</div>
            <button onClick={()=> this.changeContry()}>change</button>
            </>
        );
    }
}

export default Contry;