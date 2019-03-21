import React, { Component } from 'react';
import './../../Styles/ClearButton.css'

export class ClearButton extends Component {
  render() {
    return (
    <div className="clearBtn" onClick={this.props.handleClear}>
        {this.props.children}
    </div>
    )
  }
}

export default ClearButton
