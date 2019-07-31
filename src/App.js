import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => {
        this.setState({ monsters: monsters })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App" >
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
