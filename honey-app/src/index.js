import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SignIn from "./components/signin/signin";
import SignUp from "./pages/signup/signup"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";

const routing = (
  <div>
    <BrowserRouter>
      <Route exact path="/" component={App}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </BrowserRouter>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
