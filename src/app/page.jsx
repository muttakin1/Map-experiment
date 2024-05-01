"use client";
import { useEffect, useRef } from 'react';

// import and use components as usual
import { MapContainer, TileLayer } from "react-leaflet";
const Map = (props) => {
  const mapRef = useRef(null);
  const state = { center: { lat: 51.505, lng: -0.09 }, zoom: 13 };
  return (
    <>
   <p>hello</p>
    <MapContainer
      ref={mapRef}
     
      style={{ height: "50vh" }}
      center={state.center}
      zoom={state.zoom}
    >
      <TileLayer   
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

 />
      
    </MapContainer>
    </>
  );
};

export default Map;