import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Send from "./components/main/send/Send";
import Get from "./components/main/get/Get";

function App() {
  return (
    <div className="d-flex w-100 justify-content-between container mt-5">
      <Get/>
      <Send/>
    </div>
  );
}

//const resp = await fetch('url')

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

//

export default App;
