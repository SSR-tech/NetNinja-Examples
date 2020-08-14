import React, { Component } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
class App extends Component {
  state = {
    users: [
      { name: "SAI SHRI RAM", email: "saimilkyway@gmail.com", age: 21, id: 1 },
      { name: "Aviral", email: "aviralkatiyar@gmail.com", age: 21, id: 2 },
      { name: "Gowtham", email: "gowthamsuresh@gmail.com", age: 20, id: 3 },
    ],
  };

  adUser = user => {
    user.id = Math.random();
    let newuser = [...this.state.users, user];
    this.setState({ users: newuser });
  };

  deleteUser = id => {
    let delUser = this.state.users.filter(user => {
      return user.id !== id;
    });
    this.setState({ users: delUser });
  };

  render() {
    return (
      <div>
        <h1>Welcome to my React App 🦖</h1>
        <Users allUsers={this.state.users} removeUser={this.deleteUser} />
        <NewUser addNewUser={this.adUser} />
      </div>
    );
  }
}

export default App;
