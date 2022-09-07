import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useRef } from "react";
import BingMapsReact from "bingmaps-react";



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
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />
  );





  //    const ref = useRef(null);
  //   const [map, setMap] = useState();

  //   useEffect(() => {
  //      if (ref.current && !map) {
  //        setMap(new window.google.maps.Map(ref.current, {}));
  //     }
  //     }, [ref, map]);

  //  return (
  //       <div ref={ref} style={{
  //           height: 400,
  //           width: 400,
  //          zoom: 3, 
  //           center: { lat: 32.765, lng: -98.017 }} }>
        
  //        </div>
  //    )
 };


