import React, { Component } from 'react';
import '../App.css';

class Tabber extends Component {
  render() {
    return (
      <div>
        <ItemsList items={this.props.items}
          deleteTab={this.props.xPressed}
          changeTab={this.props.tabPressed}/>
        <span>
          <button onClick={this.props.plusPressed} className="plus">+</button>
        </span>
      </div>
    );
  }
}

function ItemsList(props) {
  const items = props.items;
  const listItems = items.map((item, index) =>
    <div key={index} className="tabber" onClick={props.changeTab.bind(this, index)}>
      Tab # {index + 1}
      <button onClick={props.deleteTab.bind(this, index)}>X</button>
    </div>
  );
  return (
    <div>{listItems}</div>
  )
}

export default Tabber;
