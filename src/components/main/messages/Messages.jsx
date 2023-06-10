import React from "react";
import Empty from "./empty/Empty";
import Message from "./message/Message";

const Messages = () => {
  return (
    <div className="h-100 col-9 text-center messages">
      <Empty />
      {/* <Message/> */}
    </div>
  );
};

export default Messages;
