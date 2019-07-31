import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    this.getSearchValue = this.getSearchValue.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => {
        this.setState({ monsters: monsters })
      })
      .catch(error => console.log(error))
  }

  getSearchValue(event) {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filtederMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !monsters.length ? <h2>Loading...</h2> : (
      <div className="App" >
        <input type='search' placeholder='Search Monsters' onChange={this.getSearchValue} />
        <CardList monsters={filtederMonsters} />
      </div>
    )
  }
}

export default App;
