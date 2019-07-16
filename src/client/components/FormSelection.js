import React from 'react';
import * as typeformEmbed from '@typeform/embed';

export default function FormSelection() {
  const popup1 = typeformEmbed.makePopup(
    'https://daniellemccarthy342205.typeform.com/to/CGX5fK',
    {
      mode: 'popup',
    }
  );

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          border: 'green solid 7px',
        }}
      >
        <p>
          This project wouldn't be possible without the help of dedicated Bravo
          fans.{' '}
        </p>
        <p>
          Get in touch, add a new restaurant location, add a new cast
          relationship, or help develop the site!
        </p>
        <p>
          All data is verified by a real human being before being submitted to
          the database.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div style={{ border: 'red solid 1px', flex: 1 }}>
          <p>
            Use this form to submit a new location to be plotted on our{' '}
            <a href="/map">map. </a>{' '}
          </p>
          <button onClick={() => popup1.open()}>Add new location</button>
        </div>
      </div>
    </div>
  );
}
