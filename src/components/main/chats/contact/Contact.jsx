import React, { useState } from "react";

const Contact = (list) => {
  const [users, setUsers] = useState(list.list.list);

  // const getAvatarUrl = await fetch(
  //   `https://api.green-api.com/waInstance1101829286/getAvatar/07a2591a131348c28c5fd6699a49f530cb52e67863e045199b`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       chatId: "79774607622@c.us",
  //     }),
  //   }
  // );
  //   console.log(await getAvatarUrl)

  //   /**
  //    *  Отправка сообщений
  //    */
  //   // const sendMessage = await fetch(
  //   //   `https://api.green-api.com/waInstance1101829286/sendMessage/07a2591a131348c28c5fd6699a49f530cb52e67863e045199b`,
  //   //   {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: JSON.stringify({
  //   //       chatId: "77776437406@c.us",
  //   //       message: "I use Green-API to send this message to you!",
  //   //     }),
  //   //   }
  //   // );
  //   // console.log(sendMessage);

  //   // POST https://api.green-api.com/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}
  //   // body: {
  //   //     "chatId": "${phoneNumber}@c.us",
  //   //     "message": "I use Green-API to send this message to you!"
  //   // }

  //   // const url = `https://api.green-api.com/waInstance${process.env.ID_INSTANCE}/ReceiveNotification/${process.env.API_TOKEN_INSTANCE}`;
  //   // const url = `https://api.green-api.com/waInstance1101829286/ReceiveNotification/07a2591a131348c28c5fd6699a49f530cb52e67863e045199b`;
  //   // const receiptId = data.receiptId;
  //   // const deleteResp = await fetch(
  //   //   `https://api.green-api.com/waInstance1101829286/DeleteNotification/07a2591a131348c28c5fd6699a49f530cb52e67863e045199b/${receiptId}`,
  //   //   {
  //   //     method: "DELETE",
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //   }
  //   // );

  // ------------------------

  // async function getAvatar() {
  //   const idInstance = '1101829286';
  //   const apiTokenInstance = '07a2591a131348c28c5fd6699a49f530cb52e67863e045199b';
  //   const ownerId = '77776437406@c.us';
  //   // const ownerId = id;
  //   const action = 'getAvatar'
  //   try {
  //     const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/${action}/${apiTokenInstance}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         chatId: ownerId,
  //       }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Ошибка запроса");
  //     }
  //     // Сохраняем responseData
  //     const responseData = await response.json();
  //     console.log(responseData)
  //     // Извлекаем адрес аватара
  //     if (responseData && responseData.existsWhatsapp === true) {
  //       return responseData.urlAvatar;
  //     }
  //   } catch (error) {
  //     console.error("Ошибка запроса:", error);
  //   }
  // }

  async function takeUserMessages(id, count) {
    const idInstance = "1101829286";
    const apiTokenInstance =
      "07a2591a131348c28c5fd6699a49f530cb52e67863e045199b";
    // const ownerId = "79774607622@c.us";
    console.log(typeof id);
    const ownerId = id;
    const action = "getChatHistory";
    try {
      const response = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/${action}/${apiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatId: ownerId,
            count: count,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка запроса");
      }
      // Сохраняем responseData
      const responseData = await response.json();
      console.log(responseData);
      // Извлекаем адрес аватара
      if (responseData && responseData.existsWhatsapp === true) {
        return responseData.urlAvatar;
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  }

  window.onload = function () {
    takeUsers();
  };

  async function takeUsers() {
    const url = `https://api.green-api.com/waInstance1101829286/getContacts/07a2591a131348c28c5fd6699a49f530cb52e67863e045199b`;
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  }


  return (
    <div className="overflow h-100">
      {users &&
        users.map((el) => (
          <div
            key={el.id}
            className="d-flex w-100 pointer"
            onClick={() => takeUserMessages(el.id, 11)}
          >
            <div className="p-2 pb-0">
              <img className="contact_img" src={el.url} alt="use photo" />
            </div>
            <div className="w-100">
              <p className="m-0 fs-4">
                {!el.name ? el.id.slice(0, -5) : el.name}
              </p>
              <p className="m-0">{el.id}</p>
              <hr className="mt-2 mb-1" />
            </div>
          </div>
        ))}
      <p className="text-center mt-2 mb-3" style={{ fontSize: "12px" }}>
        &#x1f512; Ваши личные сообщения{" "}
        <span className="text-primary">защищены сквозным шифрованием</span>
      </p>
    </div>
  );
};

export default Contact;
