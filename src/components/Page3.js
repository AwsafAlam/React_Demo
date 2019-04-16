import React, { Component } from 'react';
import '../css/App.css';

class Page3 extends Component {
    render(){
        console.log(this.props.phone);
        return (
        <div className="App">
            <header className="App-header">
                <h2>Email : {this.props.mail}</h2>
                <h2>Phone : </h2>
                <ul>
                {this.props.phone.map((title , i) => <li key={i}>{title}</li>) }
                </ul>
      
            </header>
        </div>
      );
    }
  
}

export default Page3;
