"use client";
import { useEffect, useRef } from "react";
import "./style.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { Map,MapContainer, TileLayer, Marker, Popup,ZoomControl } from "react-leaflet";
import fetchQueenslandData from "./API-call";
import { FaMapMarker } from "react-icons/fa";

const legalIcon = new Icon({
  iconUrl:
    "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png",
  iconSize: [35, 35], // size of the icon
  iconAnchor: [28, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [14, 20], // point from which the popup should open relative to the iconAnchor
});

const MapComponents = (props) => {
  const ref = useRef(null);
  const state = { center: { lat: -26.786053, lng: 153.135746 }, zoom: 13 };
  const coordinates = [
    [-26.786053, 153.135746],
    [-27, 153.5],
  ];

  coordinates.forEach((element) => console.log(element));

  useEffect(() => {

    const data = fetchQueenslandData();
    console.log(data);

  }, []);

  return (
    <>
      <MapContainer
        ref={ref}
        style={{ height: "97vh" }}
        center={state.center}
        zoom={state.zoom}
      >
        <TileLayer
          ref={ref}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" zoomInText="+" zoomOutText="-" />
       {coordinates.map((marker) => (
          <Marker position={marker} icon={legalIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
       ))}
      
      </MapContainer>
    </>
  );
};

export default MapComponents;
