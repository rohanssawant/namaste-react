import { useState } from "react";

const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Contact: rohan1@gmail.com</h4>
    </div>
  );
};

export default User;
