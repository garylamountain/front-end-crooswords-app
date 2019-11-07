import React from 'react';
import Box from './Box';

class Boxes extends React.Component {
   render() {
     return (
      <div className="boxes">
         { this.props.grid.map(box => <Box key={box.id} letter={box.letter} number={box.number} />)}
       </div>
     )
   }
}

export default Boxes;