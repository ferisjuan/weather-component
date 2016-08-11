import React from 'react';

module.exports = React.createClass({
  styles:{
    marginTop: 8,
    marginLeft: 8
  },
  render(){
    return(
      <div style={this.styles}>
        {this.props.text}
      </div>
    );
  }
});
