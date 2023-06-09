import React from "react";

const Contact = (list) => {
  console.log(list.list.list);
  return (
    <div className="overflow h-100">
      {list &&
        list.list.list.map((el) => (
          <div className="d-flex w-100 pointer">
            <div className="p-2 pb-0">
              <img className="contact_img" src={el.img} alt="use photo" />
            </div>
            <div className="w-100">
              <p className="m-0 fs-4">{el.name}</p>
              <p className="m-0">{el.text}</p>
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
