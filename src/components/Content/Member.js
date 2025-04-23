import React, { Component } from 'react';

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: {
        name: 'Nguyen Tuan Hai',
        email: 'tuanhai@gmail.com',
        count: 0
      }
    };
  }
  increase = () => {
    this.setState({
      field: {
        ...this.state.field,
        count: this.state.field.count + 1
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Tôi tên là: {this.state.field.name}</h1>
        <p>Email: {this.state.field.email}</p>
        <p>Giá trị: {this.state.field.count}</p>
        <button onClick={this.increase}>Thay đổi</button>
      </div>
    );
  }
}
