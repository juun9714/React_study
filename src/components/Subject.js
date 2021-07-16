import React, { Component } from 'react';

class Subject extends Component {
    // js최신 스펙, class내의 함수는 function을 생략해도 됨
    render() {
        //props = property
        return (
            // 컴포넌트는 반드시 하나의 최상위 태그로 시작해야 함
            <header>
                <h1><a href="/">{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;