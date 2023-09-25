import React from "react";
import { GITHUB_API } from "../utils/common";
import UserClassName from "./UserClassName";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: "Dummy" },
    };
    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_API + "rohanssawant");
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
    // console.log(jsonData);
    // console.log(this.props.name + "Child comp did mount");

    // setInterval(() => {
    //   // console.log(`log`);
    // }, 2000);
  }

  render() {
    // console.log(this.props.name + "Child render");
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <UserClassName name={name} />
        <h4>Location: India</h4>
        <h4>Contact: rohan@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
