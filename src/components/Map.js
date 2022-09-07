import React from "react";
import BingMapsReact from "bingmaps-react";
import './Map.css'



export default function Map() {
  return (
    <BingMapsReact
      bingMapsKey="AlDDHwGyfIu68B4xNa15mProAjfCtMlxdshtdG8SfmeRnUUHNPEeW4dBUwVTRTkQ"
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 32.765185, longitude: -98.015850 },
        mapTypeId: "aerial",
        zoom: 16
      }}
    />
  );
};





