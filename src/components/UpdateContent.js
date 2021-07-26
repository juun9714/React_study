import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc,
      id: this.props.data.id
    }
    this.inputFormHandler = this.inputFormHandler.bind(this)
  }


  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    console.log("hihi", this.props.data)
    console.log("Update Content render")
    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function (e) {
            e.preventDefault()
            // e를 들여다보면 나옴
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            )
            // target인 form에 각 input 태그의 "name"으로 들어가 있음
          }.bind(this)}
        >

          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
              // props값은 read-only 이기 때문에 contructor에서 
              // props값을 받아서 state값으로 넣어주고, state값을 input의 value 값으로 가져오기
            ></input></p>
          <p>
            <textarea
              onChange={this.inputFormHandler}
              name="desc"
              placeholder="description"
              value={this.state.desc}

            ></textarea>
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

export default UpdateContent;