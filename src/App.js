import React, { Component } from 'react';
import './css/App.css';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      email: '',
      phone: []
    }
  }
  
  setEmail(m){
    this.setState({
      mail: m,
      page: 1
    });
  }

  setPhone(ph){
    this.setState({
      phone: ph,
      page: 2
    });
  }

  handlePages(){
    switch (this.state.page) {
      case 0:
        return <Page1 mail={this.setEmail.bind(this)}></Page1>;
      case 1:
        return <Page2 setPhone={this.setPhone.bind(this)}></Page2>;
      case 2:
        return <Page3 mail={this.state.mail} phone={this.state.phone} ></Page3>;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {this.handlePages()}
        </header>
      </div>
    );
  }
}

export default App;
