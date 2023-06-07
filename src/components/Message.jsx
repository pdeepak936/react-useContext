import React from "react";

function Message({ user }) {
  //Getting access to the state provided by context provider wrapper
  return <p>Welcome {user}:)</p>;
}

export default Message;
