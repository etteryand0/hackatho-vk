import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import {createBrowserHistory} from 'history';
import { Router } from "react-router-dom";

// Init VK  Mini App
bridge.send("VKWebAppInit");

const history = createBrowserHistory();

ReactDOM.render((
    <Router history={history}>
        <App />
    </Router>
    ), document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
