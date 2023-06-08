import React from "react";
import { list } from "../list";

const Send = () => {
  const outgoing = list.filter((el) => el.status === "outgoing");

  return (
    <div>
      {outgoing.map((item) => (
      <div>
        <h3>Исходящие</h3>
        <div>
          <p>Номер получателя</p>
          <p>Сообщение{item.text}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Send;