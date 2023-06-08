import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Get from "./components/main/get/Get";
import Send from "./components/main/send/Send";

function App() {
  return (
    <div className="d-flex w-100 justify-content-between container mt-5">
      <Get/>
      <Send/>
    </div>
  );
}

// const response = await fetch(url);

// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   const json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }

// const url = https://api.green-api.com/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}

/** Send Message */
// {
//     chatId: `${phoneNumber}@c.us`,
//     message: message
// }

/** Reply */
// {
//     "chatId": "11001234567@с.us",
//     "message": "I use Green-API to send this message to you!",
//     "quotedMessageId": "361B0E63F2FDF95903B6A9C9A102F34B"
// }

export default App;
