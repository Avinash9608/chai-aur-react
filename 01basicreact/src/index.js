import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// function MyApp() {
//   return <h2>My Application MyApp</h2>;
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MyApp /> */}
    <App />
  </React.StrictMode>
);
