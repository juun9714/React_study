import React, { Component } from 'react';


class CreateContent extends Component {
  render() {
    console.log("Content render")
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}


export default CreateContent;