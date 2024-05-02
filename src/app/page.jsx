"use client";
import { useEffect, useRef } from "react";
import "./style.css";
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, } from "react-leaflet";
import { FaMapMarker } from "react-icons/fa";

const legalIcon = new Icon ({
  iconUrl : 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png',
  iconSize : [35,35], // size of the icon
  iconAnchor : [22,94], // point of the icon which will correspond to marker's location
  popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor

})

// import and use components as usual

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
      <Marker position={[51.505, -0.09]} icon={legalIcon}>   
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </>
  );
};

export default Map;
