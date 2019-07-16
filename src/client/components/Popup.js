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
      closeButton={true}
      closeOnClick={true}
      anchor="top"
    >
      <div>{locationName}</div>
      <div>{description}</div>
    </Popup>
  );
}
