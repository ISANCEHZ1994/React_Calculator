import React from 'react';

export default class Calculator extends React.Component{

    state={
        val: '',
        sign: '', 
        val2: '',
    };

    clickingNumbers = (num) => {
        this.setState({
            val: this.state.val + num
        })
    };

    equationSign = (eq) => {
        this.setState({
            sign: eq
        })
    }


    clearHandler = () => {
        this.setState({
            val: '',
            sign: '',
            val2: ''
        })
    };


    render(){

        return(
            <div style={{textAlign: 'center'}}>
                
                <button name='1' onClick={(e) => this.clickingNumbers(e.target.name)}> 1 </button>
                <button name='2' onClick={(e) => this.clickingNumbers(e.target.name)}> 2 </button>
                <button name='3' onClick={(e) => this.clickingNumbers(e.target.name)}> 3 </button>
                <button name='4' onClick={(e) => this.clickingNumbers(e.target.name)}> 4 </button>
                <button name='5' onClick={(e) => this.clickingNumbers(e.target.name)}> 5 </button>
                <button name='6' onClick={(e) => this.clickingNumbers(e.target.name)}> 6 </button>
                <button name='7' onClick={(e) => this.clickingNumbers(e.target.name)}> 7 </button>
                <button name='8' onClick={(e) => this.clickingNumbers(e.target.name)}> 8 </button>
                <button name='9' onClick={(e) => this.clickingNumbers(e.target.name)}> 9 </button>
                <button name='0' onClick={(e) => this.clickingNumbers(e.target.name)}> 0 </button>
                <br></br>

                <button name='+' onClick={(e) => this.equationSign(e.target.name)}> + </button>
                <button name='-' onClick={(e) => this.equationSign(e.target.name)}> - </button>
                <button name='='> = </button>
                <button onClick={() => this.clearHandler()}> CLE </button>

    <h1> {this.state.val} {this.state.sign}</h1>

            </div>
        )
    }

}
