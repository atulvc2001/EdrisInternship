import React from "react";
import "./menu.css";
export default function Menu() {
  return (
    <nav>
      <div class="dropdown">
        <button><a href="#" class="home">Home</a></button>
        <div class="projects">
          <button>Dashboard</button>
          <ul class="shadow">
            <li><a href="#">Location Tracking</a></li>
            <li><a href="#">Temperature & Humidity</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
