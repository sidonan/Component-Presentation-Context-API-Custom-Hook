import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Проверяем, что `App.js` импортируется правильно
import "./index.css"; // ✅ Проверяем стили

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
