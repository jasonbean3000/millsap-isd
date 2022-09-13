import React from "react";
import BingMapsReact from '../BingMapsReact';
import '../Map.css'


export default function HighSchoolMap() {

  var coords = [
    {
      latitude: 32.75913,
      longitude: -98.00996
    },
    {
      latitude: 32.75912,
      longitude: -98.00364
    },
    {
      latitude: 32.75190,
      longitude: -98.00370
    },
    {
      latitude: 32.75191,
      longitude: -98.00546
    },
    {
      latitude: 32.75333,
      longitude: -98.00575
    },
    {
      latitude: 32.75334,
      longitude: -98.00635  
    },
    {
        latitude: 32.75312,
        longitude: -98.00629
    },
    {
        latitude: 32.75315,
        longitude: -98.00859
    },
    {
        latitude: 32.75275,
        longitude: -98.00865
    },
    {
      latitude: 32.75272,
      longitude: -98.01001
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
        center: { latitude: 32.75667, longitude: -98.00630 },
        mapTypeId: "aerial",
        zoom: 16
      }}
    />
  );
};