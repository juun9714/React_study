import './App.css';
import React, { Component } from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      subject:{title:'WEB', sub:"world wid web"},
      content:{title:'HTML', desc:"HTML is HyperText Markup Language"}
    }
  }

  // render라는 메서드를 가지는 Component를 상속하는 App이라는 클래스
  render() {
    //Subject의 속성 -> property(title, sub)
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC></TOC>
        <Content title={this.state.content.title} desc={this.state.content.desc}></Content>
      </div>
    );
  }
}

//유사 자바스크립트  ..! JSX -> react가 자동으로 js로 변환해주는 것임

export default App;
