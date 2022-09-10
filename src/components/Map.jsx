import React from "react";
import Loading from "./Loading";
import mapStyles from "./mapStyles";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAA5E7jQM_5qUElwTiq9tJApnfMK7jylJ4",
  });

  if (!isLoaded) return <Loading />;
  return <HomeMap />;
}

function HomeMap() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 28.4595, lng: 77.0266 }}
      mapContainerClassName="map-container"
      options={{ styles: mapStyles.dark }}
    >
      <MarkerF position={{ lat: 28.4595, lng: 77.0266 }} />
    </GoogleMap>
  );
}
