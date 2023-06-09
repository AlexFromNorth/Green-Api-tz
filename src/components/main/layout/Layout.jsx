import React from "react";
import Messages from "../messages/Messages";
import Chats from "../chats/Chats";
import { list } from "../chats/list";

const Layout = () => {
  return (
    <div
      style={{ backgroundColor: "var(--main)", height: "100vh", padding: '1% 5%' }}
      className="text-white d-flex"
    >
      <Chats list={list}/>
      <Messages />
    </div>
  );
};

export default Layout;
