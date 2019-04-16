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

class Page2 extends Component {
  
    constructor (props) {
      super(props);
       
      this.state = {
        count : 0,
        prompt: 'Phone',
        name: '',
        validation: false,
        childlist: []
      }
      this.phoneList = new Map();
    //   this.children = [];
    }
    
    handleChangeValue(num , key){
        console.log("Val: "+num +" key: "+key);
        // for (let i = 0; i < this.phoneList.length; i++) {

        // }
        // this.phoneList.push(num);
        this.phoneList.set(key,num)

    }
  
    handleClick(){
      if (this.refs.myInput !== null) {
        // var input = this.refs.myInput;
        var inputValue = this.state.name;
        console.log("pg2 Clicked " + inputValue);
        // alert("Input is", inputValue);
        if(inputValue === ""){
          console.log("Invalid");
        }
        else{
           console.log(" count :"+this.state.count);
           const newList = []
           newList.push(inputValue);
           this.phoneList.forEach((value,key) => {
                newList.push(value);
           });
        //    this.phoneList.push(inputValue);
        //    for (let i = 0; i < this.state.count; i++) {
        //        this.phoneList.push(i);
        //    }
           this.props.setPhone(newList);
        }
       
      }
  
    }

    removeItem(index) {
        const children = this.state.childlist.filter((children, idx) => {
          return idx !== index
        })
        this.setState({
            count: (this.state.count - 1), 
            childlist: children 
        });
    }

    onAddChild = () => {
        // let val = this.state.count;
        // const children = this.state.childlist;    
        // children.push(
        //     <PhoneInput 
        //     onChangeValue={this.handleChangeValue.bind(this)} 
        //     removeItem={this.removeItem.bind(this)} key={val} number={val} 
        //     />);
        const children = [];
        for (var i = 0; i < this.state.count+1; i += 1) {
            children.push(<PhoneInput onChangeValue={this.handleChangeValue.bind(this)} removeItem={this.removeItem.bind(this)} key={i} number={i} />);
        };
        this.setState({
        count: (this.state.count + 1),
        childlist: children
        });
      }

    render(){
        const children = [];
        for (var i = 0; i < this.state.count; i += 1) {
            children.push(<PhoneInput onChangeValue={this.handleChangeValue.bind(this)} removeItem={this.removeItem.bind(this)} key={i} number={i} />);
        };
        

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
                <Fab size="small" color="primary" aria-label="Add" >
                    <AddIcon onClick={this.onAddChild} />
                </Fab>
                {/* {children} */}
                {this.state.childlist}
            </CardContent>
            <CardActions>
            <Button variant="contained" color="primary" onClick={this.handleClick.bind(this)}>
                Done
            </Button>
            </CardActions>
            </Card>
            {/* <button onClick={this.onAddChild} className="btn">Add</button>
            <input type="button" id="btn" value="Done" onClick={this.handleClick.bind(this)}></input> */}
          </header>
        </div>
      );
    }
  
}

export default Page2;
