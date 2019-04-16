import React, {Component} from 'react';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class PhoneInput extends Component {

    handleInput(e){
        const num = e.target.value;
        this.props.onChangeValue(num, this.props.number);
        console.log("InputNo: "+this.props.number);
    }
    
    handleRemove(){
        this.props.removeItem(this.props.number);
    }

    render(){
        return (
            
            <CardActions>
                <TextField
                    id="outlined-name"
                    label="Phone"
                    onChange={this.handleInput.bind(this)}
                    // onChange={e => this.setState({ name: e.target.value })}
                    margin="normal"
                    variant="outlined"
                />
                {/* <input type= "text" onChange={this.handleInput.bind(this)}></input> */}
                <IconButton aria-label="Delete" onClick={this.handleRemove.bind(this)}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        );
    }
}
  
export default PhoneInput;