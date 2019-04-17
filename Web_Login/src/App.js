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
      phone: [""]
    }
  }
  
  setEmail(m){
    this.setState({
      mail: m,
      page: 1
    });
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    });
  }

  onChangePhone = (i, val) => {
    let phones = this.state.phone;
    phones[i] = val;
    this.setState({phone: phones})
  }

  addPhone = () => {
    let phone = this.state.phone;
    phone.push("");
    console.log(phone);
    this.setState({phone})
  }

  removePhone = (index) => {
    console.log("Remove: "+index);
    let phone = this.state.phone;
    // phone.filter((idx) => {
    //   return idx !== index;
    // });
    phone.splice(index,1);
    this.setState({phone})
  }

  handlePages(){
    switch (this.state.page) {
      case 0:
        return <Page1 mail={this.setEmail.bind(this)}></Page1>;
      case 1:
        return <Page2 nextPage={this.nextPage} onChangePhone={this.onChangePhone} removePhone={this.removePhone} addPhone={this.addPhone} phone={this.state.phone}></Page2>;
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
