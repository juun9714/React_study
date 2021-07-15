import './App.css';
import React, { Component } from 'react';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"


class App extends Component {
  // render라는 메서드를 가지는 Component를 상속하는 App이라는 클래스
  render() {
    //Subject의 속성 -> property(title, sub)
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web !"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    );
  }
}

//유사 자바스크립트  ..! JSX -> react가 자동으로 js로 변환해주는 것임

export default App;
