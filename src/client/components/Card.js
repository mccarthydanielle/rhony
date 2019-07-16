import React from 'react';
import { Card } from 'semantic-ui-react';

export default function LocationCard(props) {
  const {
    locationName,
    address,
    /*castMembers*/ description,
    neighborhood,
    seasons,
  } = props.locationDetails;

  const [lat, long] = props.locationDetails.coords;
  return (
    <Card
      onClick={() => props.handleRelocate(lat, long)}
      style={{ marginTop: '30px' }}
    >
      <Card.Content>
        <Card.Header>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>{locationName}</div>

            <div style={{}}>{neighborhood}</div>
          </div>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Meta>{address}</Card.Meta>
        <Card.Meta>Season(s): {seasons.join(', ')}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}
