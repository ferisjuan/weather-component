import React from 'react';
import Paper from 'material-ui/Paper'
const style = {
  height: 50,
  width: 340,
  margin: 5,
  textAlign: 'left',
  display: 'inline-block'
};

const Element = React.createClass({
  render(){
    return (
      <div>
        <Paper
          style={style}
          zDepth={2}
          transitionEnabled={true}
        />
      </div>
    );
  }
});

module.exports = Element;
