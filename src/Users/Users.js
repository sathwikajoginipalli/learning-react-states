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
          let tempUser = user;
          tempUser = tempUser.age-10> 0?tempUser.age -=10:alert("age cannot be less than 0");
          return tempUser;
        });
        this.setState({
          newState
        });
      }
      render(){
        return (<div>
          <h1>setstate example</h1>
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