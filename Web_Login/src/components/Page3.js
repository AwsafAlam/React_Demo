import React, { Component } from 'react';
import '../css/App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class Page3 extends Component {
    
    render(){
        const styles = theme => ({
            root: {
              width: '100%',
              maxWidth: '360px',
              backgroundColor: theme.palette.background.paper,
            },
          });
        console.log(this.props.phone);
        return (
        <div className="App">
            <header className="App-header">
                <h2>Email : {this.props.mail}</h2>
                <h2>Phone : </h2>
                <List component="nav">
                {
                    this.props.phone.map((title , i) => 
                    // <li key={i}>{title}</li>
                    <div key={i}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                        <Divider />

                    </div>
                    
                    ) 
                }
                </List>
                {/* <ul>
                {this.props.phone.map((title , i) => <li key={i}>{title}</li>) }
                </ul> */}
      
            </header>
        </div>
      );
    }
  
}

export default Page3;
