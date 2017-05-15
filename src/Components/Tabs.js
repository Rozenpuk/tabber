import React, { Component } from 'react';
import '../App.css';

class Tabs extends Component {
  render() {
    return (
      <div>
        <ItemsList items={this.props.items}
          count={this.props.count}
          deleteTab={this.props.xPressed}
          changeTab={this.props.tabPressed}/>
        <button onClick={this.props.plusPressed} className="plus">+</button>
      </div>
    );
  }
}

function ItemsList(props) {
  const items = props.items;
  const listItems = items.map((item, index) =>
    <div key={index} className="tabber" onClick={props.changeTab.bind(this, index)}>
      Tab # {props.items[index].number}
      <button onClick={props.deleteTab.bind(this, index)}>X</button>
    </div>
  );
  return (
    <div>{listItems}</div>
  )
}

export default Tabs;
