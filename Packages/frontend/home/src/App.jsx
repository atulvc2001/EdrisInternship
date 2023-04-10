import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Api from "./api";
import "./index.scss";
import Axios from "axios";


const App = () => (
  <div className="container">
    <Header />
    <div className="body">
      Home page Content
    </div>
    <Api />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
