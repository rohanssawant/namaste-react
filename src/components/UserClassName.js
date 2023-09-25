import React, { Component } from "react";

export class UserClassName extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "UserClassName constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + " UserClassName comp did mount");
  }

  render() {
    // console.log(this.props.name + " UserClassName render");
    return <h1>{this.props.name}</h1>;
  }
}

export default UserClassName;
