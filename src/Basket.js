import React, { Component } from 'react';
import Number from './Number';

class Basket extends Component {
  render() {
    const seeds = this.props.seeds || [];
    console.log(seeds.length);
    return (
      <div className="basket">
        { seeds.map(item => <Number number={item} key={item} />) }
      </div>
    );
  }
}

export default Basket;
