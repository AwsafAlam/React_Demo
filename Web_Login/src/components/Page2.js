import React, { Component } from 'react';
import '../css/App.css';
import PhoneInput from './PhoneInput';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Page2 extends Component {
  
    constructor (props) {
      super(props);
       
      this.state = {
        count : 0,
        prompt: 'Phone',
        name: '',
        validation: false,
        
      }
      
    }
    
   
    handleClick = () => {
      if (this.props.phone[0] !== null || this.props.phone[0] !== "") {
        console.log(" count :"+this.state.count);
        
        this.props.nextPage();
      }
      else{
        console.log("Invalid");
      }
       
    }
    

    render(){
      
      return (
        <div className="App">
          <header className="App-header">
          <Card >
            <CardContent>
                {
                  this.props.phone.map((phoneNumber, i) => (
                    <CardActions key={i}>
                      <TextField 
                        id="outlined-name"
                        error={this.state.validation}
                        label={this.state.prompt}
                        margin="normal"
                        variant="outlined"
                        value={phoneNumber} onChange={(e) => this.props.onChangePhone(i, e.target.value)}/>
                        {i>0 ?
                          <IconButton aria-label="Delete" onClick={() => this.props.removePhone(i)}>
                            <DeleteIcon />
                          </IconButton>
                       : null

                        }
                        {/* <PhoneInput removePhone={this.props.removePhone(i)} phone={this.props.phone} ></PhoneInput> */}
                    </CardActions>
                  ))

                }
                <Fab size="small" color="primary" aria-label="Add" >
                    <AddIcon onClick={this.props.addPhone} />
                </Fab>
              </CardContent>
            <CardActions>
            <Button variant="contained" color="primary" onClick={this.handleClick}>
                Done
            </Button>
            </CardActions>
            </Card>
           
          </header>
        </div>
      );
    }
  
}

export default Page2;
