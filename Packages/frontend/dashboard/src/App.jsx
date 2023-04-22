import React from "react";
import ReactDOM from "react-dom";
import Header from "home/header";
import Footer from "home/footer";
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <div className="body">
    <Header />
    This is dashboard
    
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));