import React from 'react'
import SetIcon from './SetIcon.jsx'

var textString = React.createClass({
  render(){
    return(
      <div>
        <p style={this.props.styles}>
          <span>
            <SetIcon
              classes={this.props.iconBefore}
              styles={this.props.iconStyles}
            />
          </span>
          {this.props.text}
          <span>
            <SetIcon
              classes={this.props.iconAfter}
              styles={this.props.iconStyles}
            />
          </span>
        </p>
      </div>
    );
  }
});

module.exports = textString;
