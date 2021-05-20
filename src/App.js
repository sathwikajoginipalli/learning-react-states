import Users from './Users/Users'; 
import React, { Component } from 'react';
import './App.css';
import Parent from './components/parenttoChild/Parent';

class App extends Component {
  state = {
    name: 'techsith',
    title: 'hello'
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
  changetheworld=(newtitle)=>{
    this.setState({
      title:newtitle
    })
    

  }

  render() {
    return (
      <div className="App">
      <br/>
      <Users></Users>
      <Parent changetheworldevent = {this.changetheworld.bind(this,'iwillchange')} 
      bethesameevent = {this.changetheworld.bind(this,'staythesame')} 
      title={this.state.title}/>
      {/* two way binding */}
      <h1>two binding example</h1>
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