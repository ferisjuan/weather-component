import React from 'react'

export default class TextString extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <p style={this.props.styles}>
          <span><i className={this.props.iconBefore}></i></span>
          {this.props.text}
          <span><i className={this.props.iconBst}></i></span>
        </p>
      </div>
    );
  }
}
