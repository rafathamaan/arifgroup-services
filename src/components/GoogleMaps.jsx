 "use client"
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Button from "./Button";
import FadeIn from "./FadeIn";

const MyGoogleMaps = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "55vh",
    borderRadius: "10px", 
    overflow: "hidden", 

  };


  const center = {
    lat: 17.1392727,
    lng: 79.6325732,
  };

  const handleNavigateClick = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
      "_blank"
    );
  };

  const handleMapClick = (event) => {
    window.open(`https://maps.app.goo.gl/c63BcNULMXwisQ3x9`, "_blank");
  };

  const handleMarkerClick = (event) => {
    window.open(`https://maps.app.goo.gl/c63BcNULMXwisQ3x9`, "_blank");
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <FadeIn>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
        onClick={handleMapClick}

      >
        <Marker
          position={center}
          onClick={handleMarkerClick}
          label={{
            text: "Arif Metal",
             // Replace with your business name
            fontSize: "20px",
            fontWeight: "bold",
            
          }}
        />
      </GoogleMap>
      <div className="text-center mt-10">
        <button
          onClick={handleNavigateClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          Start Navigation
        </button>
      </div>
      </FadeIn>
      
    </LoadScript>
  );
};

export default MyGoogleMaps;