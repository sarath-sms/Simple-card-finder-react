import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {name: 'ganesh', id: 'asd1'},
        {name: 'Nithya shankar', id: 'asd2'},
        {name: 'Ambeth', id: 'asd3'},
        {name: 'vishnu', id: 'asd4'},
        {name: 'rajesh', id: 'asd5'},
      ]
    }
  }
  render() {
  return (
    <div className="App">
      {this.state.monsters.map(monster => (
        <h1 key={ monster.id }> {monster.name} </h1>
      ))}
    </div>
  );
}}

export default App;
