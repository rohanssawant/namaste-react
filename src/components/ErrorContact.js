const ErrorContact = ({ msg }) => {
  return (
    <div>
      <h1>Oops!</h1>
      <h2>{msg ? msg : "Something went wrong in ErrorContact."}</h2>
    </div>
  );
};

export default ErrorContact;
