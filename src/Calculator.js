import React from 'react';

export default class Calculator extends React.Component{

    state={
        val: '',
    };

    clickingNumbers = (num) => {
        this.setState({
            val: this.state.val + num
        })
      console.log(`you clicked on ${num}`)
    };


    clearHandler = () => {
        this.setState({
            val: ''
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

                <button> + </button>
                <button> = </button>
                <button onClick={() => this.clearHandler()}> CLE </button>

        <h1> {this.state.val} </h1>

            </div>
        )
    }

}
