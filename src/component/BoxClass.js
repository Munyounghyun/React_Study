import React, { Component } from "react";

export default class BoxClass extends Component {
  componentWillUnmount() {
    console.log("바이바이");
  }
  render() {
    return <div>Box{this.props.num}</div>;
  }
}
