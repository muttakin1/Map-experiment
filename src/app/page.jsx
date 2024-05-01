"use client";
import { useEffect, useRef } from "react";
import "./style.css";
import 'leaflet/dist/leaflet.css';

// import and use components as usual
import { MapContainer, TileLayer } from "react-leaflet";
const Map = (props) => {
  const ref = useRef(null);
  const state = { center: { lat: 51.505, lng: -0.09 }, zoom: 13 };
  return (
    <>
      <div>
        <h1>hello</h1>
      </div>
      <MapContainer
      ref={ref}
      style={{ height: "50vh" }}
      center={state.center}
      zoom={state.zoom}
    >
      <TileLayer ref={ref}   
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

 />
      
    </MapContainer>
    </>
  );
};

export default Map;
