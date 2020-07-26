import React from 'react';
import RangeItem from './component/range';
import Guessor from './component/guessor';
import Alert from './component/alertmsg';
import Default from './component/rDefault';
// import { render } from 'react-dom';

class App extends React.Component{
  state = {
    range : [1,10],
    boom  : 6,
    alert : {
      status : false,
      msg    : 'Hi'
    },
    restart :false
  }

  checkGuess = (value) => { 
    //validate value   
    let val = parseInt(value);
    if (isNaN(val)) {
      this.validationMsg('Enter Correvt Value')
      return;
    }

    //validate in range
    if (val > this.state.range[1]) {
      this.validationMsg('Out of Range')
      return;
    }else if (val < this.state.range[0]){
      this.validationMsg('Out of Range')
      return;
    }

    //validate hit boom
    if (val === this.state.boom) {
      this.setState({restart : true});
      this.validationMsg('You get the Boom')
      return;
    }

    //update range
    let difference = 0;
    if (val < this.state.boom) {        
      this.setState({range : [val, this.state.range[1]]});    
      difference = this.state.range[1] -val;
    } else {
      this.setState({range : [this.state.range[0], val]});
      difference = val -this.state.range[0];
    }

    //validate hit boom
    if (difference === 2) {
      this.setState({restart : true});
      this.validationMsg('You Win')
    }
  }

  validationMsg = (msg) =>{
    this.setState({alert:{
      status : true,
      msg
    }})

    if (this.state.restart) {
      setTimeout(this.restoreDefaultMsg, 3000);
    }
  }

  restoreDefaultMsg = () =>{
    this.setState({alert:{
      status : false,
      msg     : ''
    }})
  }

  restoreDefault =()=>{
    this.setState({
      boom : Math.floor(Math.random() * 9) + 2,
      restart : false,
      range : [1, 10]
    });
    this.validationMsg('') 
  }

  componentDidMount() {    
    this.setState({boom : Math.floor(Math.random() * 9) + 2});      
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <div style={this.container()}>
          <Alert alert = {this.state.alert}/>
          <RangeItem rangeList = {this.state.range} />
          <Guessor checkGuess = {this.checkGuess} restart={this.restart}/>
          <Default restart={this.state.restart} restore={this.restoreDefault}/>
        </div>
      </div>
    );
  }

  container = () =>{
    return {
      margin: 'auto',
      marginTop: '100px',
      width: '50%',
      border: '3px solid black',
      padding: '10px',
      textAlign: 'center'
    }
  }
}

export default App;
