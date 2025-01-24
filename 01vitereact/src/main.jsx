import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
createRoot(document.getElementById("root")).render(anotherElement);
