import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios'

class AddStudent extends React.Component {
    state = { 
      Username:"",
      Password:"",
      questions:[]
     }
     
  handleChange = ()=> {
      const Username= this.state.Username;
      const questions= this.state.questions;
      console.log("studentname: ",Username+" ","rollnumber: ",questions)
       axios.post('http://localhost:3000/teacher/addassign',{
         title: Username,
         question: questions
       })
       .then(res => 
        console.log(res),
        alert('Data Successfully added!'))
       .catch(error=> console.error(error));
         
    }     
 
     render() { 
      const handleChange = () =>{
        this.state.questions.push(this.state.Password)
        console.log(this.state.questions)
      }
        return (
            <div style={{padding:"5%"}}>
            <h1>
                Register Students
            </h1>
            
            <Form onFinish={(event) => this.handleChange(event)}>
                  <Form.Item
                    label="Title"
                    name="Title"
                    rules={[
                      {
                        
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input onChange={(event)=>this.setState({Username:event.target.value})} />
                  </Form.Item>
            
                  <Form.Item
                    label="Question"
                    name="Question"
                    rules={[
                      {
                        
                        message: 'Please input your Rollnumber!',
                      },
                    ]}
                  >
                    <Input width="50%" onChange={(event)=>this.setState({Password:event.target.value})}/>
                  </Form.Item>
                  
                  
                  <Form.Item >
                  <Button type="primary" onClick={handleChange}>
                      add question
                    </Button>  <Button type="primary" htmlType="submit" >Submit </Button>
                  </Form.Item>
                </Form>      
                </div>
          );
}
}
export default AddStudent;