import React from 'react'
import * as typeformEmbed from '@typeform/embed'

export default function FormSelection() {

  const popup1 = typeformEmbed.makePopup("https://daniellemccarthy342205.typeform.com/to/CGX5fK", {
    mode: 'popup'
  })

  return (
    <div>
      <p>This project wouldn't be possible without the help of dedicated Bravo fans. Help make it greater by contributing to our vast database of Bravo information. All data is verified by a real human being before being submitted to the database.</p>


      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ border: 'red solid 1px', flex: 1 }}>
          <p>Use this form to submit a new location to be plotted on our <a href="/map">map. </a> </p>
          <button onClick={() => popup1.open()}>Add new location</button>
        </div>

        <div style={{ border: 'red solid 1px', flex: 1 }}>
          <p>Use this form to submit any other information.</p>
          <ul style={{ textAlign: 'left' }}>
            <li>For example:</li>
            <li>Help us implement our cast relationships graph, submit relationship connections between cast members</li>
            <li>New feature ideas  </li>
            <li>Anything else that you feel should be known.</li>
          </ul>

          <button>Add any other information</button>
        </div>
      </div>
    </div >
  )
}
