import React from 'react'
import SetIcon from './SetIcon.jsx'

var textString = React.createClass({
  element(props){
    if (props.position === "before") {
      return (<span>
        <SetIcon
          iconClasses={props.iconClasses}
          styles={props.iconStyles}
        />
        {props.text}
      </span>
      );
    }
    return (
      <span>
        {props.text}
        <SetIcon
          iconClasses={props.iconClasses}
          styles={props.iconStyles}
        />
      </span>
    );
  },
  render(){
    return(
      <div>
        <p style={this.props.styles}>
          {this.element(this.props)}
        </p>
      </div>
    );
  }
});

module.exports = textString;
