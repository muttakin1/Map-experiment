"use client";
import { useEffect, useRef } from "react";
import "./style.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarker } from "react-icons/fa";

const legalIcon = new Icon({
  iconUrl:
    "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png",
  iconSize: [35, 35], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

// import and use components as usual

const MapComponents = (props) => {
  const ref = useRef(null);
  const state = { center: { lat: 51.505, lng: -0.09 }, zoom: 13 };
  const coordinates = [
    [51.505, -0.09],
    [51.49, -0.09],
  ];

  coordinates.forEach((element) => console.log(element));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://services1.arcgis.com/vkTwD8kHw2woKBqV/arcgis/rest/services/ESCAD_Current_Incidents_Public/FeatureServer/0/query?f=geojson&where=1%3D1&outFields=*');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
       // setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Clean-up function, will be called on unmount or before re-running the effect
    return () => {
      // You can do any cleanup tasks here, such as canceling async tasks
    };
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
