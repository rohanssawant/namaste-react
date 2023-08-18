import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <h2>This is Namaste React.</h2>
    </div>
  );
};

// class ContactUs extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent contructor");
//   }

//   componentDidMount() {
//     console.log("Parent comp did mount");
//   }

//   render() {
//     console.log("Parent render");
//     return (
//       <div>
//         <h1>Contact Us</h1>
//         <h2>This is Namaste React.</h2>
//         {/* <User name={"Rohan"} location={"Navi Mumbai"} /> */}
//         <UserClass name={"first class"} location={"Navi Mumbai class"} />
//         {/* <UserClass name={"second class"} location={"Navi Mumbai class"} /> */}
//       </div>
//     );
//   }
// }

export default ContactUs;
