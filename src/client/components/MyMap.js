import React from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN
console.log(process.env)


export default function MyMap() {
  return (
    <ReactMapGL
      mapboxApiAccessToken={mapboxToken}
      width="100vw"
      height="100vh"
      latitude={37.7577}
      longitude={-122.4376}
      zoom={8}
      onViewportChange={(viewport) => {
        const { width, height, latitude, longitude, zoom } = viewport;
        // Optionally call `setState` and use the state to update the map.
      }}
    />
  )
}
