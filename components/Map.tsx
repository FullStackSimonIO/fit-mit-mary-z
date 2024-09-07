"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const { Map } = await loader.importLibrary("maps");

      const position = { lat: 48.668021770522, lng: 13.076691191679535 };

      // add options to the map
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "fit-mit-mary",
      };

      // setups the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);
  return <div style={{ height: "600px" }} ref={mapRef}></div>;
};

export default Map;
