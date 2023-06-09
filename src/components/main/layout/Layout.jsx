import React from "react";
import Messages from "../messages/Messages";
import Chats from "../chats/Chats";

const Layout = () => {
  return (
    <div
      style={{ backgroundColor: "var(--main)", height: "100vh", padding: '1% 5%' }}
      className="text-white d-flex"
    >
      <Chats />
      <Messages />
    </div>
  );
};

export default Layout;
