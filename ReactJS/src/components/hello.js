import React, { Component } from 'react';
import {Card } from 'antd';

class Hello extends Component {
    
    render() { 
        return ( 
            <div className="site-card-border-less-wrapper">
            <center> 
                <Card title={this.props.data.title} bordered={false} style={{ width: "40%" }}>
                 
                             <p>{this.props.data.name}</p>        
                             <p>{this.props.data.rollno}</p>
             
              </Card>
              </center>
           </div>
        );
    }
}
export default Hello;
