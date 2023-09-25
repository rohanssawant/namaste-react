import React from "react";
import { Outlet } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className=" p-2 m-2">Submit</button>
      </form>
      <Outlet />
    </div>
  );
};

// class ContactUs extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log("Parent contructor");
//   }

//   componentDidMount() {
//     // console.log("Parent comp did mount");
//   }

//   render() {
//     // console.log("Parent render");
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
