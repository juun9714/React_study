import React, {Component} from 'react';

class TOC extends Component{
    render(){
      var lists=[]
      var data=this.props.data
      var i=0
      while(i<data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
        i++
      }
      return(
        <nav>
          <ul>
            {lists}
              {/* <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li> */}
          </ul>
        </nav>
      );
    }
  }
  
export default TOC;
// TOC.js 내의 구성요소 중 TOC를 외부에서 사용할 수 있게 하자 !