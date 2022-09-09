import React from "react";
import BingMapsReact from '../BingMapsReact';
import '../Map.css'


export default function MiddleSchoolMap() {

  var coords = [
    {
      latitude: 32.75060,
      longitude: -98.01116
    },
    {
      latitude: 32.75194,
      longitude: -98.00859
    },
    {
      latitude: 32.75322,
      longitude: -98.00858
    },
    {
      latitude: 32.75321,
      longitude: -98.00582
    },
    {
      latitude: 32.75116,
      longitude: -98.00584
    },
    {
      latitude: 32.75074,
      longitude: -98.00713  
    },
    {
        latitude: 32.75087,
        longitude: -98.00725
    },
    {
        latitude: 32.75060,
        longitude: -98.00784
    },
    {
        latitude: 32.75072,
        longitude: -98.00793
    },
    {
        latitude: 32.75049,
        longitude: -98.00832
    },
    {
        latitude: 32.75077,
        longitude: -98.00854
    },
    {
        latitude: 32.75024,
        longitude: -98.00963
    },
    {
        latitude: 32.74983,
        longitude: -98.00935
    },
    {
        latitude: 32.74935,
        longitude: -98.01028
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
        center: { latitude: 32.75083, longitude: -98.00888 },
        mapTypeId: "aerial",
        zoom: 17
      }}
    />
  );
};