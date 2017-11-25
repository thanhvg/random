import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Number from './Number';

class Basket extends Component {
  render() {
    const seeds = this.props.seeds || [];
    return (
      <div className="basket">
          { seeds.map(item => <Number number={item} key={item} />) }
      </div>
    );
  }
}

export default Basket;
