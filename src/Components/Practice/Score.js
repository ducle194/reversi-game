import React, { Component } from 'react';

export default class Score extends Component{
    render(){
        return(
            <ul className="score-board d-flex flex-column justify-content-center align-self-center center-text">
                <li className="">Black : {this.props.x}</li>
                <li className="">White : {this.props.o}</li>
            </ul>
        );
    }
}