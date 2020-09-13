import React, { Component } from 'react';
import axios from 'axios';


class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            op1 : '',
            op2 : '',
            op : '',
            result : ''
        }
        this.op1Handler = this.op1Handler.bind(this);
        this.op2Handler = this.op2Handler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    
    }

    op1Handler = (p) => {
        this.setState({
            op1 : p.target.value
        })
    }
    
    op2Handler = (p) => {
        this.setState({
            op2 : p.target.value
        })
    }

    submitHandler = (p) => {
        //p.preventDefault();
        
        var data = {
            x : this.state.op1,
            y: this.state.op2,
            op : '+'
        }
        console.log("Data = " + data);


        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/calculate', data)
         .then(res => {
             console.log(res);
         })
    }

    render() {
        return(
            <div>
                <form align ="center">
                        <input type="text" name="op1" onChange={this.state.op1Handler} /> <br/>
                        
                        {/* <input type="radio" name="calc" value="addition" />+ <br/>
                        <input type="radio" name="calc" value="subtraction"/>- <br/>
                        <input type="radio" name="calc" value="multiplication"/>* <br/>
                        <input type="radio" name="calc" value="division"/>/ <br/> 
                        */}

                        <input type="text" name="op2"  onChange={this.state.op2Handler} /> <br/><br/>

                        <input type="submit" value="Ans" onSubmit={this.state.submitHandler}/> <br/> 

                        
                </form>
               
            </div>
        );
    }
  }


export default Calculator;