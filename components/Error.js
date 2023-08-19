import { useRouteError } from "react-router-dom";
import Header from "./Header";
const Error = ({ msg }) => {
  console.log(msg);
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <h2>{msg ? msg : "Something went wrong."}</h2>
    </div>
  );
};

export default Error;
