import React from 'react';

export default class Keypad extends React.Component{

    buttonPressed = (e) => {
        this.props.pressingButtons(e.target.name)
        // console.log(e.target.name)
    };

    render(){

        const buttonSign = ['1','2','3','4','5','6','7','8','9','0', '+', '-', '*', '/', '*', '=' ]

        const creatingButtons = () => buttonSign.map( sign => {
           return( <button name={sign} onClick={this.buttonPressed}> {sign} </button> )
        })
        
        return(
            <div>
                {creatingButtons()}
                <button onClick={() => this.props.clearHandler()}> CLE </button>
            </div>
        )
    }
};