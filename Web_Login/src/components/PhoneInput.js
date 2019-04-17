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
        if(this.props.phone.length > 1){
            return (
                <IconButton aria-label="Delete" onClick={this.props.removePhone}>
                    <DeleteIcon />
                </IconButton>
                
            );        
        }
        else{
            return <div></div>;
        }
        
    }
}
  
export default PhoneInput;