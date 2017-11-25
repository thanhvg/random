import React, { Component } from 'react';
import './App.css';
import Basket from './Basket';

const MAX = 100;

class App extends Component {
  constructor(props) {
    super(props);

    this.seeds = [];
    for (let i = 1; i <= MAX; i = i + 1) {
      this.seeds.push(i);
    }
  }

  genRandom(a) {
    return Math.floor(Math.random() * a);
  }

  render() {
    const seeds = [...this.seeds];
    const randomList = [];
    let randomPick;
    let randomIndex;
    let max;

    while (seeds.length > 0) {
      max = seeds.length;
      randomIndex = this.genRandom(max);
      randomPick = seeds[randomIndex];
      randomList.push(randomPick);
      seeds.splice(randomIndex, 1);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random order</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="content">
          <div className="grid">
            <div className="col-2">
              <Basket seeds={this.seeds} />
            </div>
            <div className="col-2">
              <Basket seeds={randomList}/>
            </div>
          </div>
          <button onClick={() => this.forceUpdate()}>
            Reset
          </button >
        </div>
      </div>
    );
  }
}

export default App;
