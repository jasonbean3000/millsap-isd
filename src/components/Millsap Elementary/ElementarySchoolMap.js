import React from "react";
import BingMapsReact from '../BingMapsReact';
import '../Map.css'

export default function Map() {

  var coords = [
    {
      latitude: 32.80875,
      longitude: -97.23154
    },
    {
      latitude: 32.80728,
      longitude: -97.22984
    },
    {
      latitude: 32.80514,
      longitude: -97.22991
    },
    {
      latitude: 32.80550,
      longitude: -97.23160
    }
  ]

  const polygon = {
    coords,
    options: {
      fillColor: 'rgba(255, 255, 255, 0.1)',
      strokeColor: 'blue',
      strokeThickness: 3
    },
  }

  const polygons = [polygon]

  return (
    <BingMapsReact
      
      bingMapsKey="AlDDHwGyfIu68B4xNa15mProAjfCtMlxdshtdG8SfmeRnUUHNPEeW4dBUwVTRTkQ"
      height="700px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="700px"
      
      polygons={polygons}
      viewOptions={{
        center: { latitude: 32.80699, longitude: -97.23076 },
        mapTypeId: "aerial",
        zoom: 17
      }}
    />
  );
};





