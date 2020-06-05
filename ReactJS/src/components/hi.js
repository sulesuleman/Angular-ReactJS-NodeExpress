import React, { Component } from 'react';
import Hello from './hello';
class Hi extends Component {
        state = {
            hello:{
                "title" : "WELCOME TO THE HELL!",
                "name" :"Suleman",
                "rollno" : "SP17-BCS-011"
            }
          }
    
  render() { 
       return(
            <div style={{padding:"5%"}}>
                <Hello data={this.state.hello}/>
            </div>

       )
    }
    }
    export default Hi;