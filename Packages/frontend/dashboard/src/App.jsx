import React from "react";
import ReactDOM from "react-dom";
import Header from "home/header";
import Footer from "home/footer";
import Api from "home/api";
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="body">
    <Header />
    This is dashboard
    <Api />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));