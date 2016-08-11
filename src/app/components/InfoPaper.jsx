import React from 'react';
import Paper from 'material-ui/Paper'
const style = {
  height: 50,
  width: 340,
  marginTop: 10,
  marginBottom: 5,
  padding: 5,
  textAlign: 'left',
  display: 'inline-block'
};

const Element = React.createClass({
  render(){
    return (
      <div>
        <Paper
          children={this.props.children}
          style={style}
          transitionEnabled={true}
          zDepth={2}
        />
      </div>
    );
  }
});

module.exports = Element;
