import React, { Component } from 'react';
import axios from 'axios';
import Answer from './AnswerComponent';
import { Redirect } from 'react-router';

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            op1 : '',
            op2 : '',
            op : '',
            result : '',
            successFlag : null ,
            answer : ''
        }
        this.op1Handler = this.op1Handler.bind(this);
        this.op2Handler = this.op2Handler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.opHandler = this.opHandler.bind(this);
    
    }

    componentWillMount() {
        this.setState({
            successFlag : false
        })
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

    opHandler = (p) => {
        this.setState({
            op : p.target.value
        })
    }

    submitHandler = (p) => {
        p.preventDefault();
        
        var data = {
            op1 : this.state.op1,
            op2 : this.state.op2,

            op : this.state.op
            
        }

        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/calculate', data)
         .then(res => {
            console.log(res);
            
            if(res.data.status === 200) {
                this.setState({
                    successFlag: true,
                    answer: res.data.ans
                })
            }
         
         })
    }
 
    render() {
        var redirectVar = null;

        if(this.state.successFlag){
            redirectVar =  <Redirect to="/Answer" ans={this.state.answer}  />
        }

        return(
            <div>
                {redirectVar}
                <form align ="center">
                    <input type="text" name="op1" onChange={this.op1Handler} /> <br/>
                        
                        <div onChange={this.opHandler}>
                            <input type="radio" name="op" value="addition"   />+   
                            <input type="radio" name="op" value="subtraction"/>-    
                            <input type="radio" name="op" value="multiplication"/>* 
                            <input type="radio" name="op" value="division"/>/
                        </div>
                        

                    <input type="text" name="op2"  onChange={this.op2Handler} /> <br/><br/>

                    <input type="submit" value="Submit" onClick={this.submitHandler}/> <br/>  

                 </form>
               
            </div>
        );
    }
  }

export default Calculator; 