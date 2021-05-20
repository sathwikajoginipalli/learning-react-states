import Users from './Users/Users'; 
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'techsith'
  } 

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <br/>
      <Users></Users>
      {/* two way binding */}
      <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
      <br/>
      <button onClick={() => this.changeName('Awesome Techsith :(')}>Change Using Anon Function</button>
      <br/>
      {/* bind is more efficient */}
      <button onClick={this.changeName.bind(this, 'Awesome Techsith :)')}>Change Using Bind</button>
        <br/><br/><br/>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;