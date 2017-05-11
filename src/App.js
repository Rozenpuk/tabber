import React, { Component } from 'react';
import './App.css';
import Tabber from './Components/Tabber.js'
import TextEditor from './Components/TextEditor.js'
// import Tabs from './Tabs.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={items: ['test'], active:0};
    this.handleNewTab = this.handleNewTab.bind(this);
    this.handleDeleteTab = this.handleDeleteTab.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleNewTab() {
    const newOne = "Enter your text here"
    this.setState((prevState) => ({
      items: prevState.items.concat(newOne)
    }))
  }

  handleDeleteTab(number) {
    let arr = this.state.items;
    arr.splice(number, 1);
    this.setState({items: arr});
  }

  handleChange(e) {
    let arr = this.state.items;
    arr.splice(this.state.active, 1, e.target.value)
    this.setState((prevState) => ({
      items: arr, active: prevState.active
    }))
  }

  handleTabChange(number) {
    this.setState((prevState) => ({
      items: prevState.items, active: number
    }))
  }

  render() {
    const activeItem = this.state.active;
    return (
      <div>
        <div>
          <Tabber
            items={this.state.items}
            plusPressed={this.handleNewTab}
            xPressed={this.handleDeleteTab}
            tabPressed={this.handleTabChange}/>
        </div>
        <div>
          <TextEditor
            value={this.state.items[activeItem]}
            onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
