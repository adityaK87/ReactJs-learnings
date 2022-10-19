import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Component/App";
import TextUtils from "./Component/TextUtils";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App people={["Arvind", "Manisha", "Shikha", "Shilpa", "Swati", "Abhishek"]} /> */}
    <TextUtils />
  </React.StrictMode>
);
