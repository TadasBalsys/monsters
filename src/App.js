import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
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

  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filtederMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return !monsters.length ? <h2>Loading...</h2> : (
      <div className="app" >
      <h1 className='app-header'>Monsters</h1>
        <SearchBox placeholderString={"Search Monsters"} handleChange={this.handleChange} />
        <CardList monsters={filtederMonsters} />
      </div>
    )
  }
}

export default App;
