import React from 'react'
import { Marker } from 'react-map-gl'

export default function Pin(props) {
  console.log('pin props', props)

  const { locationName, address, castMembers, description, neighborhood, seasons } = props.location

  const [lat, long] = [props.location.coords[0], props.location.coords[1]]
  return (
    <Marker latitude={lat} longitude={long} offsetLeft={0} offsetTop={0} >
      <div>{locationName}</div>
    </Marker>
  )
}
