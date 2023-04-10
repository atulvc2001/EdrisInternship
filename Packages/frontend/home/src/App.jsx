import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Test from "./test";
import Api from "./api";
import "./index.scss";
import Axios from "axios";


const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      Home page Content
    </div>
    <Api />
    <Test />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
