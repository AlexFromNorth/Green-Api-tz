import React from "react";
import Contact from "./contact/Contact";

const Chats = (list) => {
  return (
    <div className="h-100 col-3" >
      <Contact list={list} />
    </div>
  );
};

export default Chats;
