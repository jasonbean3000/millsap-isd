
import React from "react";
import BingMapsReact from './BingMapsReact';
import './Map.css'




export default function Map() {

  var coords = [
    {
      latitude: 32.76646,
      longitude: -98.01849
    },
    {
      latitude: 32.76637,
      longitude: -98.01427
    },
    {
      latitude: 32.76377,
      longitude: -98.01430
    },
     {
      latitude: 32.76391,
      longitude: -98.01853
    }
  ]

  const polygon = {
    coords,
    options: {
      fillColor: 'rgba(255, 255, 255, 0.1)',
      strokeColor: 'blue',
      strokeThickness: 1
    },
  }

  // const pushPin = {
  //   center: {
  //     latitude: 32.76601,
  //     longitude: -98.01527,
  //   },
  //   options: {
  //     title: "Millsap Elementary School",
  //     subTitle: "101 Wilson Bend Rd, Millsap, TX 76066",
  //     icon: 'none'
  //   },
  // }
  
  // const pushPins = [pushPin];
 

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
        center: { latitude: 32.765185, longitude: -98.015850 },
        mapTypeId: "aerial",
        zoom: 17
      }}
    />
  );
};





