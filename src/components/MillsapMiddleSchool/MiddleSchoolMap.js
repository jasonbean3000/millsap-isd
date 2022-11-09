import React from "react";
import BingMapsReact from '../BingMapsReact';
import '../Map.css'


export default function MiddleSchoolMap() {

  var coords = [
    {
      latitude: 32.83614,
      longitude: -97.23866
    },
    {
      latitude: 32.83615,
      longitude: -97.23529
    },
    {
      latitude: 32.83464,
      longitude: -97.23533
    },
    {
      latitude: 32.83466,
      longitude: -97.23868
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
        center: { latitude: 32.83543, longitude: -97.23678 },
        mapTypeId: "aerial",
        zoom: 17
      }}
    />
  );
};