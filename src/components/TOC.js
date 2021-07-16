import React, { Component } from 'react';

class TOC extends Component {
  render() {
    var lists = []
    var data = this.props.data
    var i = 0
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            // 위 코드 : data[i].id를 e의 dataset의 id 멤버로 전달하는 것
            onClick={function (e) {
              e.preventDefault()
              this.props.onChangePage(e.target.dataset.id)
            }.bind(this)}
          >{data[i].title}</a>
        </li>
      )
      i++
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;