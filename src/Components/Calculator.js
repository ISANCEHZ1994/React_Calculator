import React from 'react';
import Result from './Result'
import Keypad from './Keypad';
import '../Style/Calculator.css';

export default class Calculator extends React.Component{

    state={
        val: '', // we don't know how many elements its going to have -  
    };

    pressingButtons = (buttonName) => { // all buttons behave the same - until you get to their name!
        if(buttonName === '='){ 
            this.calculate()
        }else{
        this.setState({
            val: this.state.val + buttonName
        })
    }
    };

    calculate = () => {  // we call this method inside of the pressingButtons Function
        const calculated = this.state.val

        this.setState({
            val: eval(calculated) // eval() - IMPORTANT when creating a calculator LITERALLY turns a string of numbers and symbols and calculates them
        })
    };

    backSpace = () => { // we use the JavaScript Function slice()
        this.setState({
            val: this.state.val.slice(0, -1) // we want to take the last element that was enter away
        })
    };

    clearHandler = () => {
        this.setState({ // literally returns your state to what it was
            val: '' 
        })
    };


    render(){

        return(
            <div style={{textAlign: 'center'}} className="calculator">

                <Result 
                val={this.state.val} 
                />
                
                <Keypad 
                pressingButtons={this.pressingButtons}  
                clearHandler={this.clearHandler}
                backSpace={this.backSpace}
                />


            </div>
        )
    }

};
