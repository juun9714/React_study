import React, { Component } from 'react';

class CreateContent extends Component {
  render() {
    console.log("Content render")
    return (
      <article>
        <h2>Create</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault()
            // e를 들여다보면 나옴
            this.props.onSubmit(e.target.title.value, e.target.desc.value)
            // target인 form에 각 input 태그의 "name"으로 들어가 있음
          }.bind(this)}
        >
          {/* onSubmit => html의 기능 */}
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
            {/* textarea <= 입력값이 여러 줄일 때 */}
          </p>
          <p>
            <input type="submit" value="Submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;