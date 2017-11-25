import React from 'react';

class Number extends React.Component {

  render() {
    const number = this.props.number;
    return (
      <div className="number">
        <div>
          {number}
        </div>
      </div>
    );
  }

}

/* const Number = ({ number }) => (
 *   <div className="number">
 *     <div>
 *       {number}
 *     </div>
 *   </div>
 * );*/

export default Number;
