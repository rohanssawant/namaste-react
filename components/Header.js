import { useState } from "react";
import { Link } from "react-router-dom";
import { CDN_LOGO_URL } from "../utils/common";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="img w-56" src={CDN_LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link className="hover:text-slate-600" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="hover:text-slate-600" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="hover:text-slate-600" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="hover:text-slate-600" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
