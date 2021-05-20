import React, {Component} from 'react';
import User from './User';

class Users extends Component{
    state={
        users:[
            {name: "John",age:89},
            {name: "Jill", age:78},
            {name:"Peter",age:80}
        ],
        title: "Hello Users"
    }
    makeMeYounger = () => {
        const newState = this.state.users.map((user)=>{
          const tempUser = user;
          tempUser.age -=10;
          return tempUser;
        });
        this.setState({
          newState
        });
      }
      render(){
        return (<div>
          <button onClick={this.makeMeYounger}>Make Us 10 Years Younger</button>
          <br/>
          <h1>{this.state.title}</h1>
          {
            this.state.users.map((user)=>{
              return <User age={user.age}>{user.name}</User>
            })
          }
          </div>)
      }
    

}

export default Users;