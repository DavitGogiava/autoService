"use client";
import React, { useState, useRef } from "react";
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  const [center, setCenter] = useState({ lat: 41.724833767324725, lng: 44.76123412523991 });
  const ZOOM_LEVEL = 16;
  const mapRef = useRef();

  return (
    <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{height: "60vh", width:"40vw"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker
          position={[41.724833767324725, 44.76123412523991]}

        >
            <Popup>You are here</Popup>
        </Marker>
      
    </MapContainer>
  );
}
