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
            alert("submit")
            // 보통 form태그에서 submit 버튼이 눌리면, form의 action에서 지정한 페이지로 넘어가는게 default
            // 하지만 우리는 페이지 전환없이 웹을 만드려고 하는 것이기 때문에 preventDefault해줌 
            // action에서 지정한 페이지로 form에 입력한 내용 전송
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