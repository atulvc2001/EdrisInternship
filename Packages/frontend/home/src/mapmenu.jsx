import React, { useEffect } from "react";
import './mapmenu.css';

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function VerticalTabs() {
  useEffect(() => {
    document.getElementById("defaultOpen").click();
  }, []);

  return (
    <div>
      <div className="tab">
        <button
          className="tablinks"
          onClick={(event) => openCity(event, "London")}
          id="defaultOpen"
        >
        <p>Device Name: Name</p>
        <p>status: status</p>
        <p>User: User Name</p>
        </button>
        <button
          className="tablinks"
          onClick={(event) => openCity(event, "Paris")}
        >
          Paris
        </button>
        <button
          className="tablinks"
          onClick={(event) => openCity(event, "Tokyo")}
        >
          Tokyo
        </button>
      </div>

      <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
}

export default VerticalTabs;