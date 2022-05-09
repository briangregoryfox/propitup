import React, { Component } from 'react';
import './App.css';

import MyNewComponent from './components/MyNewComponent';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      clicked : 0
    }
  }

  clickHandler = () => {
    let {clicked} = this.state
    this.setState({
      'clicked' : clicked+1
    })
  }

  clickHandlerTwo = () => {
    let {clicked} = this.state
    this.setState({
      'clicked' : clicked+1
    })
  }

  render(){
    return (
      <div className="App">
        <MyNewComponent  fullName="Brian Fox" age={this.state.clicked} hairColor="Brown"/>
        <button onClick={this.clickHandler}>Birthday button for Brian</button>
        <MyNewComponent  fullName="John Smith" age={this.state.clicked} hairColor="black"/>
        <button onClick={this.clickHandlerTwo}>Birthday button for John</button>
      </div>
    );
  }
}

export default App;
