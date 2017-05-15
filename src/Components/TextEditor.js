import React, { Component } from 'react';
import '../App.css';

class TextEditor extends Component {
  render() {
    return (
      <div>
        <textarea className="textarea"
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <h3>Text length: {this.props.value.length}</h3>
      </div>
    )
  }
}

export default TextEditor;
