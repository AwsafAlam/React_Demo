import React, { Component } from 'react';
import '../css/App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Page1 extends Component {
  
    constructor (props) {
      super(props);
      this.state = {
        prompt: 'Email',
        name: '',
        validation: false
      }
    }
    
  
    handleClick(){
      if (this.refs.myInput !== null) {
        var inputValue = this.state.name;
        // var inputValue = input.value;
        console.log("pg1 Clicked " + this.state.name);
        
        if(inputValue === ""){
          console.log("Invalid");
          this.setState({
            prompt: 'Empty field',
            validation: true
          });
          return;
        }
        var emailValid = inputValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if(emailValid){
          console.log("valid");
          this.setState({
            prompt: inputValue
          });
          this.props.mail(inputValue);
        }
        else{
          console.log("Invalid");
          this.setState({
            prompt: 'Email Invalid',
            validation: true
         });
        }
      }
      
    }
    
    render(){
      return (
        <div className="App">
          <header className="App-header">
          <Card >
            <CardContent>
            <TextField
                id="outlined-name"
                error={this.state.validation}
                label={this.state.prompt}
                onChange={e => this.setState({ name: e.target.value })}
                margin="normal"
                variant="outlined"
                />
            </CardContent>
            <CardActions>
            <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>
                Next
            </Button>
            </CardActions>
            </Card>

            {/* <input type= "text" ref="myInput"></input> */}
            {/* <p id="prompt">{this.state.prompt}</p> */}
            {/* <input type="button" id="btn" value="Next" onClick={this.handleClick.bind(this)}></input> */}
            
          </header>
        </div>
      );
    }
  
}

export default Page1;
