import React from 'react';

var SetIcon = React.createClass({
  render(){

    return(
      <i className={this.props.iconClasses} style={this.props.styles}></i>
    );
  }
});

module.exports = SetIcon;
