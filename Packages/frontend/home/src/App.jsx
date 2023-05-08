import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Api from "./api";
import "./index.scss";
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from "./menu";
import Axios from "axios";
import Mapmenu from "./mapmenu";
import 'bootstrap/dist/css/bootstrap.min.css';
import MapComponent from './MapComponent';


const App = () => (
  <div className>
    <Header />
    <div>
      <Menu />
    </div>
    <div class="container-mapmenu">
    <Mapmenu />
    </div>
    <MapComponent />
    <div className="body">
      <h3 className="body-title">Home page Content</h3>
      <Api />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
