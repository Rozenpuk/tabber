import React, { Component } from 'react';
import '../App.css';
import Tabs from './Tabs.js'
import TextEditor from './TextEditor.js'

class Tabber extends Component {
  constructor(props) {
    super(props);
    this.state={items: [{text: "Enter your text here",
                         number: 1}],
                active: 0,
                count: 2};
    this.handleNewTab = this.handleNewTab.bind(this);
    this.handleDeleteTab = this.handleDeleteTab.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleNewTab() {
    const newOne = {text: "Enter your text here",
                    number: this.state.count}
    this.setState((prevState) => ({
      items: prevState.items.concat(newOne), active: prevState.active, count: prevState.count + 1
    }))
  }

  handleDeleteTab(number) {
    console.log(this.state.active);
    let arr = this.state.items;
    function lengthCheck(props) {
      console.log(props.active);
      // console.log(props.active, props.items, props.items.length)
      if(props.active > arr.length) {
        console.log(props.active);
        return arr.length - 1
      }
      console.log(props.active);
      return props.active
    }
    if(arr.length > 1) {
      console.log(lengthCheck(this.state));
      arr.splice(number, 1);
      this.setState({items: arr, active: lengthCheck(this.state)});
    }
    // console.log(this.state.active, this.state.items, arr.length);
    // console.log(lengthCheck(this.state));
  }

  handleChange(e) {
    let arr = this.state.items;
    let replacement = {text: e.target.value,
                       number: this.state.items[this.state.active].number}
    arr.splice(this.state.active, 1, replacement)
    this.setState((prevState) => ({
      items: arr
    }))
  }

  handleTabChange(number) {
    this.setState((prevState) => ({
      items: prevState.items, active: number,
    }))
  }



  render() {
    console.log(this.state.active);
    // console.log(this.state.active, this.state.items, this.state.items.length);
    const activeItem = this.state.active;
    return (
      <div>
        <Tabs
          items={this.state.items}
          count={this.state.count}
          plusPressed={this.handleNewTab}
          xPressed={this.handleDeleteTab}
          tabPressed={this.handleTabChange}/>
        <TextEditor
          value={this.state.items[activeItem].text}
          onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Tabber;
