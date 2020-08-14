import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";
class App extends Component {
  state = {
    ninjas: [
      { name: "SAI SHRI RAM", age: 21, belt: "Black", id: 1 },
      { name: "SSR", age: 20, belt: "Black", id: 2 },
      { name: "SAI SHR RAM SA", age: 21, belt: "Black", id: 3 },
    ],
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas: ninjas });
  };

  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({ ninjas: ninjas });
  };

  render() {
    return (
      <div className="App">
        <h1>My First React app!</h1>
        <h1>Welcome :)</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
