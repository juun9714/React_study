import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import { read } from "fs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 2,
      subject: { title: "WEB", sub: "world wid web" },
      welcome: { title: "Welcome", desc: "Hello React !!!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    }
    this.max_content_id = this.state.contents.length
  }
  getReadContent() {
    //READ할 데이터를 찾는 함수 
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data
        // _title = data.title;
        // _desc = data.desc;
        // break;
      }
      i = i + 1;
    }
  }
  getContent() {
    //mode에 따라서 _article 부분을 처리해주는 함수 
    var _title, _desc, _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent()
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        console.log(_title, _desc)
        this.max_content_id += 1
        var _contents = this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc })
        this.setState({
          contents: _contents,
          mode:"read",
          selected_content_id: this.max_content_id
        })
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === "update") {
      _content = this.getReadContent()
      _article = <UpdateContent
        data={_content}
        onSubmit={function (_id, _title, _desc) {
          var _contents = Array.from(this.state.contents)
          var i = 0
          while(i<_contents.length){
            if(_contents[i].id===_id){
              _contents[i]={id:_id, title:_title, desc:_desc}
              break;
            }
            i++
          }
          this.setState({
            contents:_contents,
            mode:"read"
          })
        }.bind(this)}
      ></UpdateContent>
    }
    return _article
  }

  render() {
    console.log("App render");
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            if(_mode==="delete"){
              if(window.confirm("Really?!")){
                var _contents=Array.from(this.state.contents)
                var i = 0
                while(i<_contents.length){
                  if(_contents[i].id===this.state.selected_content_id){
                    _contents.splice(i,1)
                    // splice : i번째 index부터 1개의 데이터를 삭제
                    break
                  }
                  i++
                }
                this.setState({
                  mode:"welcome",
                  contents:_contents
                })
                alert("Deleted")
              }
            }else{
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
