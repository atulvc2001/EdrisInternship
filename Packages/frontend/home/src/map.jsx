import { MapContainer, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import React from "react";
import "./Map.css";

function Map() {
  const [coordinates, setCoordinates] = useState([]);
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(48.8566);

  useEffect(() => {
    // Assume this function gets the device's location data and
    // updates the coordinates state with the new location data
    const updateCoordinates = () => {
      // Get device location data
      const newLat = 51.505 + Math.random() * 0.01; // randomize latitude within small range
      const newLng = 48.8566 + Math.random() * 0.01; // randomize longitude within small range
      setLat(newLat);
      setLng(newLng);

      const newCoords = [newLat, newLng];

      // Add new coordinates to existing list of coordinates
      setCoordinates(prevCoords => [...prevCoords, newCoords]);
    };

    // Call updateCoordinates every x seconds to simulate live location data
    const intervalId = setInterval(() => updateCoordinates(), 5000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default Map;