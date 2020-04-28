import React from 'react';
import '../Style/Result.css';


export default function Result(props){
    return(
        <div style={{textAlign: 'center'}} className="calculator-screen">
            <h1> {props.val} </h1>
        </div>
    )
};