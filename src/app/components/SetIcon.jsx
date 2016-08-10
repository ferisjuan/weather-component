import React from 'react';

var SetIcon = React.createClass({
  render(){

    return(
      <i className={this.props.classes} style={this.props.styles}></i>
    );
  }
});

module.exports = SetIcon;
