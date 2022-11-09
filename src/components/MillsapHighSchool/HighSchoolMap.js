import React from "react";
import BingMapsReact from '../BingMapsReact';
import '../Map.css'


export default function HighSchoolMap() {

  var coords = [
    {
      latitude: 32.86161,
      longitude: -97.19468
    },
    {
      latitude: 32.86179,
      longitude: -97.19253
    },
    {
      latitude: 32.86175,
      longitude: -97.18708
    },
    {
      latitude: 32.86019,
      longitude: -97.18714
    },
    {
      latitude: 32.86019,
      longitude: -97.18639
    },
    {
      latitude: 32.85841,
      longitude: -97.18639
    },
    {
      latitude: 32.85847,
      longitude: -97.19474
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

  // const pushPin = {
  //   center: {
  //     latitude: 32.75083,
  //     longitude: -98.00888,
  //   },
  //   options: {
  //     title: "Millsap Middle School",
  //     subTitle: "301 E Brazos Rd, Millsap, TX 76066",
  //     icon: 'none'
  //   },
  // }
  
  // const pushPins = [pushPin];
 

  const polygons = [polygon];

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
        center: { latitude: 32.86018, longitude: -97.19033 },
        mapTypeId: "aerial",
        zoom: 16
      }}
    />
  );
};