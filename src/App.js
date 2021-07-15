// import logo from './logo.svg';
import './App.css';
//App 컴포넌트에 App.css의 디자인을 적용
import React, {Component} from 'react';

class Subject extends Component{
  // js최신 스펙, class내의 함수는 function을 생략해도 됨
  render(){
    return (
      // 컴포넌트는 반드시 하나의 최상위 태그로 시작해야 함
      <header>
        <h1>WEB</h1>
        world wide web !
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language
      </article>
    );
  }
}
class App extends Component {
  // render라는 메서드를 가지는 Component를 상속하는 App이라는 클래스
  render(){
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

//유사 자바스크립트  ..! JSX -> react가 자동으로 js로 변환해주는 것임

export default App;
