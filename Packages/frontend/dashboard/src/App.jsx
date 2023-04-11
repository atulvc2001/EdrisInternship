import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "home/header";
import Footer from "home/footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    This is dashboard
    
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));