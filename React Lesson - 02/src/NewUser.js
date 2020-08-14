import React, { Component } from "react";

class NewUser extends Component {
  state = {
    name: null,
    email: null,
    age: null,
  };

  addUser = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewUser(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.addUser} />
          <label htmlFor="name">E-Mail: </label>
          <input type="text" id="email" onChange={this.addUser} />
          <label htmlFor="name">Age: </label>
          <input type="text" id="age" onChange={this.addUser} />
          <button>Add User</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
