import React, {Component} from 'react';

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
  
export default TOC;
// TOC.js 내의 구성요소 중 TOC를 외부에서 사용할 수 있게 하자 !