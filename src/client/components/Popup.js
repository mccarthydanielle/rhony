import React from 'react';
import { Popup } from 'react-map-gl';

export default function PopupBox(props) {
  const {
    locationName,
    description /*address, castMembers, episodes, neighborhood, seasons*/,
  } = props.location;
  const [lat, long] = props.location.coords;
  return (
    <Popup
      onClose={props.closePopUp}
      latitude={lat}
      longitude={long}
      anchor="top"
      closeOnClick={true}
      closeButton={true}
      style={{ zIndex: 1000 }}
    >
      <div>{locationName}</div>
      <div>{description}</div>
    </Popup>
  );
}
