import React from "react";
import { list } from "../list";

const Get = () => {
  const ingoing = list.filter((el) => el.status === "ingoing");

  return (
    <div>
      {ingoing.map((item) => (
        <div>
          <h3>Входящие</h3>
          <div>
            <p>Номер отправителя</p>
            <p>Сообщение{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Get;
