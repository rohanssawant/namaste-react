import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <>
//       <h1>About Us</h1>
//       <p>This is Namaste React</p>
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent contructor");
  }

  componentDidMount() {
    console.log("Parent comp did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>Contact Us</h1>
        <h2>This is Namaste React.</h2>
        {/* <User name={"Rohan"} location={"Navi Mumbai"} /> */}
        <UserClass name={"first class"} location={"Navi Mumbai class"} />
        {/* <UserClass name={"second class"} location={"Navi Mumbai class"} /> */}
      </div>
    );
  }
}

export default About;
