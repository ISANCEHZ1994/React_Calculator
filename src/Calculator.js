import React from 'react';
import Result from './Result'
import Keypad from './Keypad';

export default class Calculator extends React.Component{

    state={
        val: '',
    };

    pressingButtons = (buttonName) => {
        if(buttonName === '='){
            this.calculate()
        }else{
        this.setState({
            val: this.state.val + buttonName
        })
    }
    };

    calculate = () => {
        
        const calculated = this.state.val

        this.setState({
            val: eval(calculated)
        })
    };


    clearHandler = () => {
        this.setState({
            val: ''
        })
    };


    render(){

        return(
            <div style={{textAlign: 'center'}}>

                <Result 
                val={this.state.val} 
                />
                
                <Keypad 
                pressingButtons={this.pressingButtons} 
                equationSign={this.equationSign} 
                clearHandler={this.clearHandler}
                />


            </div>
        )
    }

}
